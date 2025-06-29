const express = require('express'); // Importing the express module
const cors = require('cors'); // Importing the cors module to enable Cross-Origin Resource Sharing

const UserRouter = require('./routers/userRouter'); // Importing the user router from the routers directory

const app = express(); // Creating an instance of an Express application

const PORT = 5000; // Defining the port number for the server

// Middleware
app.use(cors({
    origin: '*', // Allowing requests from any origin
}))
app.use(express.json()); // Middleware to parse JSON bodies of incoming requests
app.use('/user', UserRouter); // Using the user router for any requests that start with '/user'

//Routing

app.get('/', (req, res) => {
    res.send('Response from the server'); // Sending a response when the root URL is accessed
})

app.get('/add', (req, res) => {
    res.send('Response from Add Route'); // Sending a response when the root URL is accessed
})

app.listen(PORT, () => {
    console.log('Server is running on port - ' + PORT) // Logging a message when the server starts.
})