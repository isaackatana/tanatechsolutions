import { Router } from 'express';
const router = Router();
import Computer from '../models/Computer.js';

// GET /api/computers
router.get('/', async (req, res) => {
  try {
    const computers = await Computer.find();
    if (computers.length === 0) {
      return res.status(404).json({ success: false, message: 'No computers found' });
    }
    res.json({ success: true, data: computers });
  } catch (err) {
    console.error('Error fetching computers:', err.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// POST /api/computers
router.post('/', async (req, res) => {
  try {
    const { name, brand, price, specs } = req.body;

    // Validate input
    if (!name || !brand || price === undefined) {
      return res.status(400).json({ success: false, message: 'Name, brand, and price are required' });
    }

    // Create a new computer document
    const newComputer = new Computer({ name, brand, price, specs });

    // Save to database
    const savedComputer = await newComputer.save();

    res.status(201).json({ success: true, data: savedComputer });
  } catch (err) {
    console.error('Error adding computer:', err.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// DELETE /api/computers/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the computer
    const deletedComputer = await Computer.findByIdAndDelete(id);

    if (!deletedComputer) {
      return res.status(404).json({ success: false, message: 'Computer not found' });
    }

    res.json({ success: true, message: 'Computer deleted successfully', data: deletedComputer });
  } catch (err) {
    console.error('Error deleting computer:', err.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

export default router;
