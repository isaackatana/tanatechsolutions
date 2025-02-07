import React from 'react'
import Login from './Login'
import Register from './Register'

function UserLogin() {
  return (
    <div className='userLoginPopup' onClick={() => setIsOpen(false)}>
      <Login/>
      <Register/>
    </div>
  )
}

export default UserLogin