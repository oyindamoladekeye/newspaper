// import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { Routes, Route} from 'react-router-dom';
import NewsList from './component/NewsList';
import Home from './component/Home';

function App() {
  return (
    <div className='p-5 w-full'>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/category/:category" element={<NewsList />} />
      </Routes>
    </div>
  )
}

export default App

//9703c331ff49bc4ea2235c444860ef2d

