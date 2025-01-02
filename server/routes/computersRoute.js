import { Router } from 'express';
const router = Router();
import Computer from '../models/Computer.js';

// GET /api/computers
router.get('/', async (req, res) => {
  try {
    const computers = await find();
    if (computers.length === 0) {
      return res.status(404).json({ message: 'No computers found' });
    }
    res.json(computers);
  } catch (err) {
    console.error('Error fetching computers:', err.message);
    res.status(500).send('Server Error');
  }
});

// POST /api/computers
router.post('/', async (req, res) => {
  try {
    const { name, brand, price, specs } = req.body;

    // Validate input
    if (!name || !brand || price === undefined) {
      return res.status(400).json({ message: 'Name, brand, and price are required' });
    }

    // Create a new computer document
    const newComputer = new Computer({ name, brand, price, specs });

    // Save to database
    const savedComputer = await newComputer.save();

    res.status(201).json(savedComputer);
  } catch (err) {
    console.error('Error adding computer:', err.message);
    res.status(500).send('Server Error');
  }
});

// DELETE /api/computers/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the computer
    const deletedComputer = await findByIdAndDelete(id);

    if (!deletedComputer) {
      return res.status(404).json({ message: 'Computer not found' });
    }

    res.json({ message: 'Computer deleted successfully', deletedComputer });
  } catch (err) {
    console.error('Error deleting computer:', err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
