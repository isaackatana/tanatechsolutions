import Computer from "../models/Computer.js";

// Get all computers
export const getAllComputers = async (req, res) => {
  try {
    const computers = await Computer.find();
    res.json({
      success: true,
      data: computers.length ? computers : "No computers found",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get a single computer by ID
export const getComputerById = async (req, res) => {
  try {
    const computer = await Computer.findById(req.params.id);
    if (!computer)
      return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: computer });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Create a new computer
export const createComputer = async (req, res) => {
  try {
    const {imageUrl, name, brand, price, specs } = req.body;
    if (!name || !brand || price == null)
      return res
        .status(400)
        .json({ success: false, message: "Name, brand, and price are required" });

    const savedComputer = await Computer.create({ imageUrl,name, brand, price, specs,  });
    res.status(201).json({ success: true, data: savedComputer });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update a computer by ID
export const updateComputer = async (req, res) => {
  try {
    const updatedComputer = await Computer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedComputer)
      return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: updatedComputer });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete a computer by ID
export const deleteComputer = async (req, res) => {
  try {
    const deletedComputer = await Computer.findByIdAndDelete(req.params.id);
    if (!deletedComputer)
      return res.status(404).json({ success: false, message: "Not found" });
    res.json({
      success: true,
      message: "Deleted successfully",
      data: deletedComputer,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
