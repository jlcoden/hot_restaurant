// Required dependencies 
const express = require('express');


// Set port for express server
const PORT = 8080;


// Configured the Express application
const app = express();

// Start listening on port 8080
app.listen(PORT, function(){
    console.log('Server is listening on PORT: ' + PORT);
});