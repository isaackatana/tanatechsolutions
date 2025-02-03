import React, { useEffect, useState } from "react";
import {
  fetchComputers,
  createComputer,
  updateComputer,
  deleteComputer,
} from "../services/computerService";
import { FaPlus } from "react-icons/fa";

function Computers() {
  const [computers, setComputers] = useState([]);
  const [form, setForm] = useState({ name: "", brand: "", price: "", specs: "" });
  const [editingId, setEditingId] = useState(null);

  const loadComputers = async () => {
    try {
      const data = await fetchComputers();
      setComputers(data.data);
    } catch (err) {
      console.error("Error fetching computers", err);
    }
  };

  useEffect(() => {
    loadComputers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateComputer(editingId, form);
        setEditingId(null);
      } else {
        await createComputer(form);
      }
      setForm({ name: "", brand: "", price: "", specs: "" });
      loadComputers();
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  const handleEdit = (computer) => {
    setForm(computer);
    setEditingId(computer._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteComputer(id);
      loadComputers();
    } catch (err) {
      console.error("Error deleting computer", err);
    }
  };

  return (
    <div className="computers">
      <h2>Computers</h2>
      <div className="container">
        <ul>
          {computers.map((computer) => (
            <li key={computer._id}>
              <img src={computer.imageUrl} alt="" />
              <div className="detail">
                <strong>{computer.name}</strong> - {computer.brand} - ${computer.price}
                <p>{computer.specs}</p>
                <button onClick={() => handleEdit(computer)}>Edit</button>
                <button onClick={() => handleDelete(computer._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="new-computer">
          <form onSubmit={handleSubmit}>
            <input type="text" 
            name="thumbnail" 
            placeholder="Image link" 
            value={form.thumbnail}
            onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={form.brand}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
            />
            <textarea
              name="specs"
              placeholder="Specs"
              value={form.specs}
              onChange={handleChange}
            ></textarea>
            <button type="submit">{editingId ? "Update" : "Add"} Computer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Computers;
