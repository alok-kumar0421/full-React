import React from 'react'

// localStorage.setItem("name","alok")
const detail={
  name:"alok",
  age:12
}
localStorage.setItem("details",JSON.stringify(detail))
const name = localStorage.getItem("details")
console.log(name)
const App = () => {
  return (
    <div>App</div>
  )
}

export default App