import session from 'express-session';
import { sessionOptions } from '../config/auth.config.js';

export const sessionMiddleware = session(sessionOptions);
