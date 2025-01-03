import React, { useEffect, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
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
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadComputers();
  }, []);

  if (loading) return <p>Loading computers...</p>;
  if (error) return <p>Error: {error}</p>

  return (
    <>
    <div className="computers">
      <div className="container">
        {computers.map((computer)=>(
          <div className="wrapper" key={computer.id}>
            <img src="" alt="" />
            <div className="detail">
              <h2>{computer.name}</h2>
              <p>Ksh. {computer.price}</p>
            </div>
            <FaCartPlus/>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Computers