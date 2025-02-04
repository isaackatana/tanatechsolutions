import React from 'react'
import { Link } from 'react-router'

function Login() {
  return (
    <>
    <div className="wrapper">
      <form action="">
          <input type="email" placeholder='Email'/>
          <input type="password" name="password" placeholder='Password'/>
          <button>Login</button>
      </form>
      <p>Don't have an account <Link to='/register'>Register</Link></p>
    </div>
    </>
  )
}

export default Login