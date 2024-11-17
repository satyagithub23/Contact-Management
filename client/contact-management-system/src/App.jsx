// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllContact from '../components/AllContacts/AllContact'
import AddContact from '../components/AddContact/AddContact'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path='/' element={<AllContact />} />
            <Route path='/contacts' element={<AddContact />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
