import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorComp = () => {
  return (
    <div className='error'>
      <h1>Ooops! Page not found !.</h1>
      <NavLink to='/'><button className='btn'>Back To Home</button></NavLink>
    </div>
  )
}

export default ErrorComp