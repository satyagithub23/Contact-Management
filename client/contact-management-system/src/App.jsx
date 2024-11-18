// import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AllContact from '../components/AllContacts/AllContact'
import AddContact from '../components/AddContact/AddContact'
import EditContact from '../components/EditContact/EditContact'
import './App.css'
import { Button, Link, Typography } from '@mui/material'

const AddContactButton = () => {
  const location = useLocation();

  return (
    location.pathname == '/' && (
      <Link href="/contacts" underline="none">
        <Button variant="contained" sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>Add Contact</Button>
      </Link>
    )
  );
};

function App() {

  return (
    <>
      <div className="container">
        <Typography variant='h5' component='h5' color='#8B5DFF' margin='auto' position='fixed' top='10px'>
          Welcome To CRM!
        </Typography>
        <Router>
          <Routes>
            <Route path='/' element={<AllContact />} />
            <Route path='/contacts' element={<AddContact />} />
            <Route path='/contacts/:id' element={<EditContact />} />
          </Routes>
          <AddContactButton />
        </Router>
      </div>
    </>
  )
}

export default App
