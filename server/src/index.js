import { existsSync } from 'fs';
import { createApp, buildPath } from './app.js';

const PORT = process.env.PORT || 3001;

if (!existsSync(buildPath)) {
  console.error('Brak folderu build/. Uruchom najpierw: npm run build');
  process.exit(1);
}

const app = createApp();

app.listen(PORT, () => {
  console.log(`Production server: http://localhost:${PORT}`);
  console.log(`Frontend + API on the same port`);
});
