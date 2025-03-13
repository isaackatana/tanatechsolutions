import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function UserLogin() {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!isMenuOpen);
  };

  return (
    <div className='auth-overlay' onClick={() => setIsOpen(false) }>
      <img src="" alt="" />
      {isMenuOpen ? <Login/> : <Register/>}
    </div>
  )
}

export default UserLogin