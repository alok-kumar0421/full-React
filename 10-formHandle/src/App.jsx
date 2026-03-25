import React from 'react'

const App = () => {
  function aftersubmit(e){
    e.preventDefault()
    console.log("submited")
  }
  return (
    <div className='main'>
      <h1>Form Handle</h1>
      <form action="" onSubmit={(e)=>{
        aftersubmit(e)
      }}>
        <input type="text" placeholder="Enter name: " />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App