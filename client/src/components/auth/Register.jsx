import React from 'react'
import { Link } from 'react-router'

function Register() {
  return (
    <>
    <div className="wrapper">
    <h3>Register</h3>
      <form action="">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
          <input type="email" placeholder='Email'/>
          <input type="password" name="password" placeholder='Password'/>
          <input type="password" name="password" placeholder='Confirm password'/>
          <button>Register</button>
      </form>
      <p>Already have an account <Link to='/login'>Login</Link></p>
    </div>
    </>
  )
}

export default Register