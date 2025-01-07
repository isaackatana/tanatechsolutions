import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { fetchComputers } from '../services/computerService';

function Computers() {
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadComputers = async () => {
      try {
        const data = await fetchComputers();
        setComputers(data);
      } catch (err) {
        setError('Failed to load computers, please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadComputers();
  }, []);

  if (loading) return <p>Loading computers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="computers">
      <div className="container">
        {computers.map((computer) => (
          <div className="wrapper" key={computer._id}>
            {/* Add fallback for image */}
            <img 
              src={computer.imageUrl || 'default-image-url.jpg'} 
              alt={computer.name} 
              className="computer-image" 
            />
            <div className="detail">
              <h2>{computer.name}</h2>
              <p>Ksh. {computer.price}</p>
            </div>
            <button className="add-to-cart">
              <FaCartPlus />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Computers;
