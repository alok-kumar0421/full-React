import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-4 justify-between bg-cyan-900'>
        <h3 className='font-bold text-xl'>black website</h3>
        <div className='flex gap-8'>
          <Link className='font-bold text-xl' to='/'>Home</Link>
          <Link className='font-bold text-xl' to='/about'>About</Link>
          <Link className='font-bold text-xl' to='/cources'>Cources</Link>
          <Link className='font-bold text-xl' to='/contact'>Contact</Link>
          <Link className='font-bold text-xl' to='/product'>Product</Link>
          
        </div>
    </div>
  )
}

export default Navbar