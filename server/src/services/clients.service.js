import { AppError } from '../errors/AppError.js';
import { clientsRepository } from '../repositories/clients.repository.js';

export const clientsService = {
  getAll() {
    return clientsRepository.findAll();
  },

  getById(id) {
    const client = clientsRepository.findById(id);
    if (!client) {
      throw new AppError(`Client with id ${id} not found`, 404);
    }
    return client;
  },

  create({ name }) {
    if (!name || typeof name !== 'string' || !name.trim()) {
      throw new AppError('Name is required', 400);
    }

    const trimmedName = name.trim();
    const exists = clientsRepository
      .findAll()
      .some((client) => client.name === trimmedName);

    if (exists) {
      throw new AppError(`Client "${trimmedName}" already exists`, 409);
    }

    return clientsRepository.create(trimmedName);
  },

  update(id, { name }) {
    if (!name || typeof name !== 'string' || !name.trim()) {
      throw new AppError('Name is required', 400);
    }

    const updated = clientsRepository.update(id, name.trim());
    if (!updated) {
      throw new AppError(`Client with id ${id} not found`, 404);
    }
    return updated;
  },

  remove(id) {
    const removed = clientsRepository.remove(id);
    if (!removed) {
      throw new AppError(`Client with id ${id} not found`, 404);
    }
  },
};
