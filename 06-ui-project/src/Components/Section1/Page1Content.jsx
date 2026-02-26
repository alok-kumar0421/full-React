import React from 'react'
import RightSection1 from './RightSection1'
import LeftSection1 from './LeftSection1'

const Page1Content = () => {
  return (
    <div className='flex items-center justify-between px-8 bg-white rounded-2xl'>
        <LeftSection1 />
        <RightSection1 />
    </div>
  )
}

export default Page1Content