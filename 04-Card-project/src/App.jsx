import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from "./components/Card"
export const App = () => {
  return (
    <>
    <div className='full'>
    <div className="parent">
    <Card link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WU0Emt19dyXiCPIuhVtxIFbqx13mkj54hA&s" brand="Amazon" price="$120/hr"/>
    <Card link="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png" brand="Google" price="$150-120k/hr"/>
    <Card link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zdLpQ1XogOHnpR9MuW1MD9oXYxuPS5FCgQ&s" brand="Triddle" price="$85/hr"/>
    <Card link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljqaDsIkzZQsQ01cpqsnbJ4TF75ZfXhVHQg&s" brand="Figma" price="$70/hr"/>
    <Card link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s" brand="AirBnb" price="$120-90k/hr"/>
    <Card link="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" brand="Apple" price="$120/hr"/>
    </div>
    </div>
    </>
  )
}

export default App