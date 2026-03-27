import React from 'react'
import axios from "axios"
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState([])
  async function getData(){
  const data =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const response = await data.json()
  console.log(response)
}
const getDataAxios=async ()=>{
  const result =await axios.get('https://picsum.photos/v2/list')
  setData(result.data)
}
  return (
    <div>
      <button onClick={getData}>get by fetch</button>
      <button onClick={getDataAxios}>get by axios</button>
      <div>
        {data.map(function(elem,index){
          return <h3>hello👋{index}.{elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App