import React from 'react'
import { FaCartPlus } from 'react-icons/fa'


const computers = [
    {
      name: 'HP Pavillion',
      price: 20000
    },
    {
      name: 'Dell Latitude',
      price: 25000
    },
    {
      name: 'Dell Latitude',
      price: 25000
    },
    {
      name: 'Dell Latitude',
      price: 25000
    },
    {
      name: 'Dell Latitude',
      price: 25000
    },
]
  
function Computers() {
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