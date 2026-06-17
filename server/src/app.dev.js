import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import clientsRoutes from './routes/clients.routes.js';
import authRoutes from './routes/auth.routes.js';
import { requestLogger } from './middleware/requestLogger.js';
import { sessionMiddleware } from './middleware/session.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

/** Dev-only: samo API z CORS dla CRA dev server (:3000) */
export const createDevApp = () => {
  const app = express();

  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(sessionMiddleware);
  app.use(requestLogger);

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use('/api/auth', authRoutes);
  app.use('/api/clients', clientsRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
