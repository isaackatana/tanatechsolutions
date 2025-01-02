import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const spares = [
    {
      name: 'Button',
      price: 20000
    },
    {
      name: 'Screen',
      price: 25000
    },
    {
      name: 'Charger',
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

function Spares() {
  return (
    <>
    <div className="spares">
        <div className="container">
            {spares.map((spare)=>(
              <div className="wrapper" key={spare.id}>
                  <img src="" alt="" />
                  <div className="detail">
                  <h2>{spare.name}</h2>
                  <p>Ksh. {spare.price}</p>
                  </div>
                  <FaCartPlus/>
              </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Spares