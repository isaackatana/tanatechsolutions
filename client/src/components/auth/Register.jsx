import React from 'react'

function Register() {
  return (
    <>
    <form action="">
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
        <input type="email" placeholder='Email'/>
        <input type="password" name="Password"/>
        <input type="password" name="Confirm password"/>
        <button>Register</button>
    </form>
    </>
  )
}

export default Register