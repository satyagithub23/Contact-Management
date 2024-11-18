import React from 'react'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import './AddContact.css'
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar'
import { useNavigate } from 'react-router-dom'



const AddContact = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        job: '',
    });
    const [open, setOpen] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [error, setError] = React.useState('');



    const navigate = useNavigate()

    const handleClose = () => {
        setOpen(false);
    };

    const submitForm = async () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.company || !formData.job) {
            setError("All fields are required!");
            return; // Prevent form submission
          }
        try {
            const addContact = await fetch('http://localhost:3300/contacts', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const response = await addContact.json();
            if (response.message === 'success') {
                setOpen(true)
                setMessage("Contact Added")              
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }
            else if(response.error) {
                setOpen(true)
                setMessage("Duplicate Entry")
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    const handleInputChange = (event) => {
        const { id, value } = event.target
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }
    return (
        <div className="contact-form-main-container">
            <Snackbar 
                open={open}
                message={message}
                onClose={handleClose}
                autoHideDuration={3000}
            />

            <Card variant='outlined' className='outlined-card'>
                <CardContent>
                    <Typography variant="h5" component="div" color='#8B5DFF'>
                        Add Contact
                    </Typography>
                </CardContent>
                <CardContent className='content-card' sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField id='firstName' label='First Name' variant='standard' onChange={handleInputChange} required error={!!error}></TextField>
                    <TextField id='lastName' label='Last Name' variant='standard' onChange={handleInputChange} required error={!!error}></TextField>
                    <TextField id='email' label='Email' variant='standard' inputMode='email' onChange={handleInputChange} required error={!!error}></TextField>
                    <TextField id='phone' label='Phone Number' variant='standard' inputMode='tel' onChange={handleInputChange} required error={!!error}></TextField>
                    <TextField id='company' label='Company' variant='standard' onChange={handleInputChange} required error={!!error}></TextField>
                    <TextField id='job' label='Job Title' variant='standard' onChange={handleInputChange} required error={!!error}></TextField>
                </CardContent>
                <Button variant="contained" sx={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem' }} onClick={submitForm}>Submit</Button>
            </Card>
        </div>
    )
}

export default AddContact