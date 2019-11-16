$("#submit-btn").on("click", function(event) {
  event.preventDefault();
  var newReservation = {
    name: $("#name")
      .val()
      .trim(),
    phoneNum: $("#phoneNum")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    uniqueID: $("#uniqueID")
      .val()
      .trim()
  };

  $.post("/api/reservations", newReservation).then(function(data) {
    // console.log("add.html", data);
    //  alert("Adding character...");
  });
});
