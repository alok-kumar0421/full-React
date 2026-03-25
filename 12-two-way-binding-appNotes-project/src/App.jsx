import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitted=(e)=>{
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }
const deleteTask=(idx)=>{
  const copyTask = [...task]
  copyTask.splice(idx,1)
  setTask(copyTask)
}
  return (
    <div className='min-h-screen bg-black text-white p-10 lg:flex'>
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
        <button className='active:bg-zinc-100 border-2 bg-zinc-400 rounded py-3 text-black' >Add Notes</button>
      </form>
      <div className='lg:ml-10 lg:w-1/2 p-10 lg:border-l-2'>
      <h1 className='font-bold text-xl'>Your Notes</h1>
      <div className='flex flex-wrap gap-3 mt-5 overflow-auto'>
        {task.map(function(elem,idx){
          return <div className=" flex justify-between flex-col card bg-cover bg-center bg-amber-50 text-black p-5 w-40 h-52 rounded-2xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZ4K6iGL2LmiK9pBrdk4Njg-YKPL-xXjtOQ&s')]">
            <h3 className='text-xl font-bold leading:tight'>{elem.title}</h3>
            <p className='leading-tight mt-2'>{elem.details}</p>
            <button onClick={()=>
            deleteTask(idx)
            } className="bg-red-500 text-white active:bg-zinc-500 px-0.5 py-0.5 mb-4 rounded">delete</button>
          </div>
        })}
      </div>
      </div>
    </div>
  )
}

export default App