import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-4 justify-between bg-cyan-900'>
        <h1 className='font-bold text-xl'>Alokians</h1>
        <div className='flex gap-8'>
            <a className='font-bold text-xl' href="">Home</a>
            <a className='font-bold text-xl' href="">About</a>
            <a className='font-bold text-xl' href="">Contact</a>
            <a className='font-bold text-xl' href="">Project</a>
        </div>
    </div>
  )
}

export default Navbar