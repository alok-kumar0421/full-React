import React, { useState } from 'react'

const App = () => {
  const [show,setShow] = useState(false)
  function cha(){
    setShow(!show)
  }
  return (
    <>
    {show && <p>Hello</p>}
    <button onClick={cha}>click</button>
    </>
  )
}

export default App