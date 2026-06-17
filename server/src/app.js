import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import clientsRoutes from './routes/clients.routes.js';
import authRoutes from './routes/auth.routes.js';
import { requestLogger } from './middleware/requestLogger.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const buildPath = join(__dirname, '../../build');

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(requestLogger);

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use('/api/auth', authRoutes);
  app.use('/api/clients', clientsRoutes);

  app.use(express.static(buildPath));

  // SPA fallback — React Router obsługuje ścieżki po stronie klienta
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(join(buildPath, 'index.html'));
  });

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
