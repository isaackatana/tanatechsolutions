import { Router } from 'express';
import {
  getAllComputers,
  getComputerById,
  createComputer,
  updateComputer,
  deleteComputer,
} from '../controllers/computerController.js';

const router = Router();

// CRUD Routes
router.get('/', getAllComputers); // Get all computers
router.get('/:id', getComputerById); // Get a single computer by ID
router.post('/', createComputer); // Create a new computer
router.put('/:id', updateComputer); // Update a computer by ID
router.delete('/:id', deleteComputer); // Delete a computer by ID

export default router;

