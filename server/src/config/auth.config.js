export const SESSION_SECRET =
  process.env.SESSION_SECRET || 'dev-secret-change-in-production';

export const SESSION_COOKIE_NAME = 'sid';

const ONE_HOUR_MS = 60 * 60 * 1000;

export const sessionOptions = {
  name: SESSION_COOKIE_NAME,
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: ONE_HOUR_MS,
    path: '/',
  },
};

export const clearSessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  path: '/',
};
