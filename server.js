// Dependencies 
const express = require('express');
<<<<<<< HEAD
var path = require('path')
=======
const path = require('path');
>>>>>>> 411a9eaac8a6a76b1dde52084de4d4fa91e8a001


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

app.get("/reservation", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/reservation.html"));
});
  

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