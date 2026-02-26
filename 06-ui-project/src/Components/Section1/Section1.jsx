import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = () => {
  return (
    <div className='h-screen w-full bg-zinc-400 pr-20 pl-20 pt-10'>
        <div className='bg-white rounded-2xl'>
        <Navbar />
        <Page1Content />
        </div>
    </div>
  )
}

export default Section1