import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const seedPath = join(__dirname, '../../data/users.seed.json');
const users = JSON.parse(readFileSync(seedPath, 'utf8'));

export const usersRepository = {
  findByEmail(email) {
    return users.find((user) => user.email === email) ?? null;
  },

  findById(id) {
    return users.find((user) => user.id === id) ?? null;
  },
};
