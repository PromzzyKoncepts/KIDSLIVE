// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Live from './Live'
import WebFont from 'webfontloader';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['gwibble', 'Chilanka']
      }
    });
   }, []);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/live" element={<Live/>}/>
      </Routes>
    </div>
  )
}

export default App
