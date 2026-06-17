export const JWT_SECRET =
  process.env.JWT_SECRET || 'dev-secret-change-in-production';

export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

export const TOKEN_COOKIE_NAME = 'token';

const ONE_HOUR_MS = 60 * 60 * 1000;

export const tokenCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: ONE_HOUR_MS,
  path: '/',
};

export const clearTokenCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  path: '/',
};
