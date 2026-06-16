import { createDevApp } from './app.dev.js';

const PORT = process.env.PORT || 3001;
const app = createDevApp();

app.listen(PORT, () => {
  console.log(`Dev API server: http://localhost:${PORT}`);
  console.log(`Uruchom frontend osobno: npm start`);
});
