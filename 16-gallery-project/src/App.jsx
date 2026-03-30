import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [index, setIndex] = useState(1)
  const [userData, setUserData] = useState([])
  async function  getData(){
    const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
  }
  let available = 'no available data'
  if(userData.length>0){
    available = userData.map(function(elem,idx){
      return<div key={idx}>
        <a href={elem.url} target="_blank">
          <div className='h-40 w-44 object-cover m-2'>
        <img className='h-full w-full rounded-xl' src={elem.download_url} alt="" />
      </div>
      <h3 className="font-bold">{elem.author}</h3>
        </a>
      </div>
    })
  }
  useEffect(function(){
    getData()
  },[index])
  return (
    <div>
    <div className='bg-black h-screen overflow-auto p-5 text-white'>
      <div className='flex flex-wrap ml-25'>{available}</div>

      <div className='flex flex-wrap flex-row justify-center p-4 gap-3 text-white'>
        <button className='w-20 h-8 text-sm active:scale-95 rounded-xl cursor-pointer bg-amber-300'
        onClick={()=>{
          if(index>0){
            setIndex(index-1)
          }
        }}>prev</button>
        <h4>page {index}</h4>
        <button className='w-20 h-8 text-sm active:scale-95 rounded-xl cursor-pointer  bg-amber-300'
        onClick={()=>{
          setIndex(index+1)
        }}>next</button>
      </div>

    </div>
    </div>
  )
}

export default App