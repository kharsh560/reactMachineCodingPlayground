import React, { useState } from 'react'
import Header from './pages/header/Header'
import Footor from './pages/footer/Footor'
import { Outlet, useLocation } from 'react-router-dom'
import WorkSpace4 from './pages/workspace4/WorkSpace4';

function Layout() {
  const [font, setFont] = useState("monospace");
  const [fontSize, setFontSize] = useState(16);
  const location = useLocation();
  console.log(location.pathname);
  
  return (
    <div className='flex flex-col min-h-screen' style={{ fontFamily: font, fontSize: `${fontSize}px`}}>
      <Header />
      <div className=' bg-black text-blue-50 flex-grow'>
        {location.pathname == "/workspace4" ? <WorkSpace4 setFont={setFont} setFontSize={setFontSize}  /> : <Outlet/> }
       
      </div>
      <Footor />
    </div>
  )
}

export default Layout