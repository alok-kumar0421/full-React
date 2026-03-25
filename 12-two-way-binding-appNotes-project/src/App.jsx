import React, { useState } from 'react'

const App = () => {
  const submitted=(e)=>{
    e.preventDefault()
    console.log(title,details)
    setTitle('')
    setDetails('')
  }
  const [title,setTitle] = useState(' ')
  const [details, setDetails] = useState(' ')

  return (
    <div className='h-screen bg-black text-white p-10 lg:flex'>
      <form className='flex flex-col gap-5 lg:w-1/2 sm:mb-5' onSubmit={(e)=>{
        submitted(e)
      }}>
      <h1 className='font-bold text-xl'>Add your notes</h1>
        <input type="text" placeholder="enter your work" className='px-5 py-3 border-2 rounded' value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        <textarea placeholder='enter details' name="" id="" className='px-5 py-3 border-2 rounded' value={details} onChange={(e)=>{
          setDetails(e.target.value)
        }}></textarea>
        <button className='border-2 bg-zinc-400 rounded py-3 text-black' >Add Notes</button>
      </form>
      <div className='lg:ml-10 lg:w-1/2 p-10 lg:border-l-2'>
      <h1 className='font-bold text-xl'>Your Notes</h1>
      <div className='flex flex-wrap gap-3 mt-5 overflow-auto'>
        <div className="card bg-amber-50 w-40 h-52 rounded-2xl"></div>
        <div className="card bg-amber-50 w-40 h-52 rounded-2xl"></div>

        <div className="card bg-amber-50 w-40 h-52 rounded"></div>

        <div className="card bg-amber-50 w-40 h-52 rounded"></div>

        <div className="card bg-amber-50 w-40 h-52 rounded"></div>

        <div className="card bg-amber-50 w-40 h-52 rounded"></div>

        <div className="card bg-amber-50 w-40 h-52 rounded"></div>

      </div>
      </div>
    </div>
  )
}

export default App