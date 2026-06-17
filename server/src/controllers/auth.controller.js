import { authService } from '../services/auth.service.js';
import {
  clearTokenCookieOptions,
  TOKEN_COOKIE_NAME,
  tokenCookieOptions,
} from '../config/auth.config.js';

export const authController = {
  async login(req, res) {
    const result = await authService.login(req.body);

    res.cookie(TOKEN_COOKIE_NAME, result.token, tokenCookieOptions);
    res.json({ user: result.user, expiresIn: result.expiresIn });
  },

  async logout(_req, res) {
    res.clearCookie(TOKEN_COOKIE_NAME, clearTokenCookieOptions);
    res.json({ ok: true });
  },

  async me(req, res) {
    res.json({ user: req.user });
  },
};
