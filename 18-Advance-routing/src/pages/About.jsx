import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const btnClicked=()=>{
        navigate('/')
    }
  return (
    <div>
        <button onClick={btnClicked} className='bg-blue-900 my-5 mx-5 px-3 py-1 rounded-xl active:scale-95'>go back page</button>
        <h1>About</h1>
    </div>
  )
}

export default About