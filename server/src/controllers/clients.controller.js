import { clientsService } from '../services/clients.service.js';

export const clientsController = {
  async getAll(_req, res) {
    console.log('%c [clientsController.getAll] Pobieranie wszystkich klientów...', 'color: orange');
    const clients = clientsService.getAll();
    res.json(clients);
  },

  async getById(req, res) {
    const id = Number(req.params.id);
    const client = clientsService.getById(id);
    res.json(client);
  },

  async create(req, res) {
    const client = clientsService.create(req.body);
    res.status(201).json(client);
  },

  async update(req, res) {
    const id = Number(req.params.id);
    const client = clientsService.update(id, req.body);
    res.json(client);
  },

  async remove(req, res) {
    const id = Number(req.params.id);
    clientsService.remove(id);
    res.status(204).send();
  },
};
