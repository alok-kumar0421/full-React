import React, { useState } from 'react'
const App = () => {
  const [num, setfirst] = useState({user:"alok",age:20})
  function clickBtn(){
    const newNum= {...num} // destructure
    newNum.user = "Monam"
    setfirst(newNum)
  }
  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={clickBtn}>click</button>
    </div>
  )
}

export default App