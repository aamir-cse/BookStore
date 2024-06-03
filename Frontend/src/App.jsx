import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'


function App() {
  return (
    <>
     {/* <Home/>
     <Course/> */}

     <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/course" element={<Courses/>} />
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App