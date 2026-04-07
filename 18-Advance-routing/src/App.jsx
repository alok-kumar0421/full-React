import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import {Route,Routes} from 'react-router-dom'
import Contact from './pages/Contact'
import Not from './pages/Not'
import Men from './pages/Men'
import Cources from './pages/Cources'
import CourcesDetails from './pages/CourcesDetails'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/cources' element={<Cources/>}/>
        <Route path='/cources/:id' element={<CourcesDetails/>}/>
        <Route path='*' element={<Not/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App