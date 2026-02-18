import React from 'react'
import Card from "./components/Card"
const App = () => {
  return (
    <>
    <div className='parent'>
    <Card user="Alok" age={22} img="https://plus.unsplash.com/premium_photo-1770246101715-d173eb120dbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"/>
    <Card user="Ankit" age={32} img="https://images.unsplash.com/photo-1771315021908-61b6808e0bb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"/>
    <Card user="Kumar" age={42} img="https://images.unsplash.com/photo-1771258052747-52e19364185f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    </>
  )
}

export default App