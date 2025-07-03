const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Model = require('../models/userModel'); // Importing the user model
// This model is used to interact with the 'Users' collection in the MongoDB database.

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body); // Logging the request body to the console

    new Model(req.body) // Creating a new instance of the Model with the request body
        .save() // Saving the new user to the database
        .then((result) => {
            res.status(200).json(result); // Sending a success response with the saved user data
        }).catch((err) => {
            res.status(500).json(err); // Sending an error response if saving fails
            console.log('Error saving user:', err.message); // Logging the error message to the console
        });
});

// /getall
router.get('/getall', (req, res) => {
    Model.find() // Finding all users in the 'Users' collection
        .then((result) => {
            res.status(200).json(result); // Sending a success response with the saved user data
        }).catch((err) => {
            res.status(500).json(err); // Sending an error response if saving fails
            console.log('Error finding users:', err.message); // Logging the error message to the console
        });
});

// /getbyid/:id
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id) // Finding a user by ID from the request parameters
        .then((result) => {
            res.status(200).json(result); // Sending a success response with the saved user data
        }).catch((err) => {
            res.status(500).json(err); // Sending an error response if saving fails
            console.log('Error saving user:', err.message); // Logging the error message to the console
        });
});

// getbyemail/:email
router.get('/getbyemail/:email', (req, res) => {
    Model.find({ email: req.params.email }) // Finding a user by email from the request parameters
        .then((result) => {
            res.status(200).json(result); // Sending a success response with the saved user data
        }).catch((err) => {
            res.status(500).json(err); // Sending an error response if saving fails
            console.log('Error saving user:', err.message); // Logging the error message to the console
        });
})

// /delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id) // Finding a user by ID and deleting them
        .then((result) => {
            res.status(200).json(result); // Sending a success response with the deleted user data
        }).catch((err) => {
            res.status(500).json(err); // Sending an error response if deletion fails
            console.log('Error deleting user:', err.message); // Logging the error message to the console
        });
})

// /update
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }) // Finding a user by ID and updating them with the request body
        .then((result) => {
            res.status(200).json(result); // Sending a success response with the updated user data
        }).catch((err) => {
            res.status(500).json(err); // Sending an error response if updating fails
            console.log('Error updating user:', err.message); // Logging the error message to the console
        });
});

// Authenticate

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                // Authentication Successful
                // Generate Token

                const { _id, name, email } = result;
                const payload = { _id, name, email };

                jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json(err);
                    } else {
                        res.status(200).json({ token });
                    }
                })

            } else {
                // Auth Failed
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        }).catch((err) => {
            res.status(500).json(err)
            console.log(err);

        });
})

module.exports = router; // Exporting the router to be used in other files