// Dependencies 
const express = require('express');
var path = require('path');


// Sets up the Express App
const PORT = 3000;
const app = express();



// Routes
// =============================================================


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
  
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/table.html"));
});

app.get("/reservations", function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"));
})
  

// Start listening on port 8080
app.listen(PORT, function(){
    console.log('Server is listening on PORT: ' + PORT);
});