import React from 'react'
import { Home } from './componenets/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Employee } from './componenets/Employee';
export const App = () => {
  return (
    <>
    <div>
      {/* usesing toaster here... */}
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              them: {
                primary: "#4aed88",
              },
            },
          }}
        />
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/employesses' element={<Employee/>}/>
        </Routes>
      </Router>
      
    </>
  )
}
