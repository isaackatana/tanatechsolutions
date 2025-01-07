import Computer from "../models/Computer.js";

// Get all computers
export const getAllComputers = async (req, res) => {
  try {
    const computers = await Computer.find();
    if (computers.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No computers found" });
    }
    res.json({ success: true, data: computers });
  } catch (err) {
    console.error("Error fetching computers:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get a single computer by ID
export const getComputerById = async (req, res) => {
  try {
    const { id } = req.params;
    const computer = await Computer.findById(id);

    if (!computer) {
      return res
        .status(404)
        .json({ success: false, message: "Computer not found" });
    }

    res.json({ success: true, data: computer });
  } catch (err) {
    console.error("Error fetching computer:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Create a new computer
export const createComputer = async (req, res) => {
  try {
    const { name, brand, price, specs } = req.body;

    if (!name || !brand || price === undefined) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Name, brand, and price are required",
        });
    }

    const newComputer = new Computer({ name, brand, price, specs });
    const savedComputer = await newComputer.save();

    res.status(201).json({ success: true, data: savedComputer });
  } catch (err) {
    console.error("Error adding computer:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update a computer by ID
export const updateComputer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, brand, price, specs } = req.body;

    if (!name || !brand || price === undefined) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Name, brand, and price are required",
        });
    }

    const updatedComputer = await Computer.findByIdAndUpdate(
      id,
      { name, brand, price, specs },
      { new: true } // Return the updated document
    );

    if (!updatedComputer) {
      return res
        .status(404)
        .json({ success: false, message: "Computer not found" });
    }

    res.json({ success: true, data: updatedComputer });
  } catch (err) {
    console.error("Error updating computer:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete a computer by ID
export const deleteComputer = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedComputer = await Computer.findByIdAndDelete(id);

    if (!deletedComputer) {
      return res
        .status(404)
        .json({ success: false, message: "Computer not found" });
    }

    res.json({
      success: true,
      message: "Computer deleted successfully",
      data: deletedComputer,
    });
  } catch (err) {
    console.error("Error deleting computer:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
