import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import './AddContact.css'
import Typography from '@mui/material/Typography';

const submitForm = () => {
    
}

const AddContact = () => {
    return (
        <div className="contact-form-main-container">
            <Card variant='outlined' className='outlined-card'>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Add Contact
                    </Typography>
                </CardContent>
                <CardContent className='content-card' sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField id='first-name' label='First Name' variant='standard'></TextField>
                    <TextField id='last-name' label='Last Name' variant='standard'></TextField>
                    <TextField id='email' label='Email' variant='standard' inputMode='email'></TextField>
                    <TextField id='phone' label='Phone Number' variant='standard' inputMode='tel'></TextField>
                    <TextField id='company' label='Company' variant='standard'></TextField>
                    <TextField id='job' label='Job Title' variant='standard'></TextField>
                </CardContent>
                <Button variant="contained" sx={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem' }} onClick={submitForm}>Submit</Button>
            </Card>
        </div>
    )
}

export default AddContact