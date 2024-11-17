const express = require('express')
const connectDB = require('./config/db')
const contactRoutes = require('./routes/contactRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 3300 || process.env.PORT

connectDB()


app.use(bodyParser.json())

const corsOptions = {
    origin: 'http://localhost:5173'
}
app.use(cors(corsOptions))

app.get('/', async (req, res) => {
    res.send("Connected to server")
})
app.use('/contacts', contactRoutes)

app.listen(PORT, () => {
    console.log(`Server listeneing on port ${PORT}`);
})