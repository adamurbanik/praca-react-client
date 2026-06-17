import { authService } from '../services/auth.service.js';
import {
  clearSessionCookieOptions,
  SESSION_COOKIE_NAME,
} from '../config/auth.config.js';

export const authController = {
  async login(req, res) {
    const result = await authService.login(req.body, req);
    res.json({ user: result.user });
  },

  async logout(req, res) {
    await authService.logout(req);
    res.clearCookie(SESSION_COOKIE_NAME, clearSessionCookieOptions);
    res.json({ ok: true });
  },

  async me(req, res) {
    res.json({ user: req.user });
  },
};
