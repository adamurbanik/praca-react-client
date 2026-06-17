import jwt from 'jsonwebtoken';
import { AppError } from '../errors/AppError.js';
import { JWT_SECRET, TOKEN_COOKIE_NAME } from '../config/auth.config.js';

/**
 * Middleware JWT — bramka przed chronionymi route'ami.
 *
 * Flow:
 *   Request → auth → controller
 *              │
 *              ├─ brak httpOnly cookie z tokenem → 401
 *              ├─ jwt.verify() OK                → req.user, next()
 *              └─ token wygasł / sfałszowany     → 401
 *
 * Express NIE wie sam o JWT — to Ty mówisz mu:
 *   router.post('/', auth, controller)
 *                      ^^^^
 *                      ten middleware musi wywołać next() albo next(err)
 */
export const auth = (req, _res, next) => {
  const token = req.cookies?.[TOKEN_COOKIE_NAME];

  if (!token) {
    return next(new AppError('Missing or invalid session', 401));
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return next(new AppError('Token expired', 401));
    }
    return next(new AppError('Invalid token', 401));
  }
};

/**
 * Opcjonalny middleware RBAC — używaj PO auth.
 * Przykład: router.delete('/:id', auth, requireRole('admin'), controller)
 */
export const requireRole = (...roles) => (req, _res, next) => {
  if (!req.user) {
    return next(new AppError('Unauthorized', 401));
  }

  if (!roles.includes(req.user.role)) {
    return next(new AppError('Forbidden', 403));
  }

  next();
};
