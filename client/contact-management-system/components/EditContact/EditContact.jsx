import React from 'react'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import './EditContact.css'
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar'
import { useNavigate, useParams } from 'react-router-dom'



const EditContact = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        job: '',
    });
    const [open, setOpen] = React.useState(false)

    const navigate = useNavigate()
    const { id } = useParams()

    const handleClose = () => {
        setOpen(false)
    }

    React.useEffect(() => {
        const getContact = async () => {
            try {
                const contactData = await fetch(`http://localhost:3300/contacts/${id}`)
                const response = await contactData.json()
                
                setFormData({
                    firstName: response.contact.firstName || '',
                    lastName: response.contact.lastName || '',
                    email: response.contact.email || '',
                    phone: response.contact.phone || '',
                    company: response.contact.company || '',
                    job: response.contact.job || ''
                })
                
            } catch (error) {
                console.log(error);
            }
        }
        getContact()
    }, [id])

    const submitForm = async () => {
        try {
            const addContact = await fetch(`http://localhost:3300/contacts/${id}`, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const response = await addContact.json();
            if (response.message === 'success') {
                setOpen(true)
                setTimeout(() => {
                    navigate('/')
                }, 2000);
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
                message="Contact Updated"
                autoHideDuration={3000}
                onClose={handleClose}
            />
            <Card variant='outlined' className='outlined-card'>
                <CardContent>
                    <Typography variant="h5" component="div" color='#8B5DFF'>
                        Add Contact
                    </Typography>
                </CardContent>
                <CardContent className='content-card' sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField id='firstName' label='First Name' variant='standard' value={formData.firstName} onChange={handleInputChange}></TextField>
                    <TextField id='lastName' label='Last Name' variant='standard' value={formData.lastName} onChange={handleInputChange}></TextField>
                    <TextField id='email' label='Email' variant='standard' value={formData.email} inputMode='email' onChange={handleInputChange}></TextField>
                    <TextField id='phone' label='Phone Number' variant='standard' value={formData.phone} inputMode='tel' onChange={handleInputChange}></TextField>
                    <TextField id='company' label='Company' variant='standard' value={formData.company} onChange={handleInputChange}></TextField>
                    <TextField id='job' label='Job Title' variant='standard' value={formData.job} onChange={handleInputChange}></TextField>
                </CardContent>
                <Button variant="contained" sx={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem' }} onClick={submitForm}>Submit</Button>
            </Card>
        </div>
    )
}

export default EditContact