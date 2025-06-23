const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Response from User Add Route');
})

// /getall
// /delete
// /update

module.exports = router; // Exporting the router to be used in other files