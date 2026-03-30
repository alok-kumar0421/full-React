import React, { useEffect, useState } from 'react'

const App = () => {
  const [num,  setNum] = useState(0)
  const [num2,  setNum2] = useState(0)

  useEffect(function(){
    console.log("pritting.........")
  },[num2])  // if num2 will change then it will change other wise not depedencies dependent on num2
  return (
    <div>
      <h2>{num}</h2>
      <h2>{num2}</h2>
      <button onClick={()=>{
        setNum(num+1)
      }}
      onDoubleClick={()=>{
        setNum2(num2+1)
      }}>click me</button>
      
    </div>
  )
}

export default App