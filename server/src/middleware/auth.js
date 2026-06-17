import jwt from 'jsonwebtoken';
import { AppError } from '../errors/AppError.js';
import { JWT_SECRET } from '../config/auth.config.js';

/**
 * Middleware JWT — bramka przed chronionymi route'ami.
 *
 * Flow:
 *   Request → auth → controller
 *              │
 *              ├─ brak nagłówka Authorization     → 401
 *              ├─ jwt.verify() OK                 → req.user, next()
 *              └─ token wygasł / sfałszowany      → 401
 *
 * Express NIE wie sam o JWT — to Ty mówisz mu:
 *   router.post('/', auth, controller)
 *                      ^^^^
 *                      ten middleware musi wywołać next() albo next(err)
 */
export const auth = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  // 1. Sprawdź format: "Bearer <token>"
  if (!authHeader?.startsWith('Bearer ')) {
    return next(new AppError('Missing or invalid Authorization header', 401));
  }

  // 2. Wyciągnij sam token (bez słowa "Bearer ")
  const token = authHeader.slice('Bearer '.length);

  try {
    // 3. Weryfikuj podpis + expiry — jwt.verify rzuci błąd jeśli coś nie gra
    const payload = jwt.verify(token, JWT_SECRET);

    // 4. Zapisz dane użytkownika na req — dostępne w każdym kolejnym middleware/handlerze
    req.user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };

    // 5. Przepuść request dalej do controllera
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
