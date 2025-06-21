const express = require('express'); // Importing the express module

const app = express(); // Creating an instance of an Express application

const PORT = 5000; // Defining the port number for the server

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