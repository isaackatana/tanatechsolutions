import React from 'react'
import Login from './Login'
import Register from './Register'

function UserLogin() {
  return (
    <div className='userLoginPopup'>
    <Login/>
    <Register/>
    </div>
  )
}

export default UserLogin