// Routes
// =============================================================


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/reservations", function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"));
})
  
