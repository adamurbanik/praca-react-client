import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const seedPath = join(__dirname, '../../data/clients.seed.json');

/** In-memory store — na produkcji zastąpione przez PostgreSQL/MongoDB */
let clients = JSON.parse(readFileSync(seedPath, 'utf8'));
let nextId = Math.max(...clients.map((c) => c.id), 0) + 1;

export const clientsRepository = {
  findAll() {
    return [...clients];
  },

  findById(id) {
    return clients.find((client) => client.id === id) ?? null;
  },

  create(name) {
    const client = { id: nextId++, name };
    clients.push(client);
    return client;
  },

  update(id, name) {
    const index = clients.findIndex((client) => client.id === id);
    if (index === -1) return null;

    clients[index] = { ...clients[index], name };
    return clients[index];
  },

  remove(id) {
    const index = clients.findIndex((client) => client.id === id);
    if (index === -1) return false;

    clients.splice(index, 1);
    return true;
  },
};
