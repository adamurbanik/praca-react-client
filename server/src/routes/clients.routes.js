import { Router } from 'express';
import { clientsController } from '../controllers/clients.controller.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { auth, requireRole } from '../middleware/auth.js';

const router = Router();

router.get('/', asyncHandler(clientsController.getAll));
router.get('/:id', asyncHandler(clientsController.getById));

router.post('/', auth, requireRole('admin'), asyncHandler(clientsController.create));
router.put('/:id', auth, requireRole('admin'), asyncHandler(clientsController.update));
router.delete('/:id', auth, requireRole('admin'), asyncHandler(clientsController.remove));

export default router;
