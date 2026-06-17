import { AppError } from '../errors/AppError.js';

/**
 * Middleware sesji — bramka przed chronionymi route'ami.
 *
 * Flow:
 *   Request → auth → controller
 *              │
 *              ├─ brak req.session.user → 401
 *              └─ sesja aktywna         → req.user, next()
 *
 * Express NIE wie sam o sesji — to Ty mówisz mu:
 *   router.post('/', auth, controller)
 *                      ^^^^
 *                      ten middleware musi wywołać next() albo next(err)
 */
export const auth = (req, _res, next) => {
  if (!req.session?.user) {
    return next(new AppError('Missing or invalid session', 401));
  }

  req.user = req.session.user;
  next();
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
