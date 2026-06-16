import { Router } from 'express';
import { clientsController } from '../controllers/clients.controller.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();

router.get('/', asyncHandler(clientsController.getAll));
router.get('/:id', asyncHandler(clientsController.getById));
router.post('/', asyncHandler(clientsController.create));
router.put('/:id', asyncHandler(clientsController.update));
router.delete('/:id', asyncHandler(clientsController.remove));

export default router;
