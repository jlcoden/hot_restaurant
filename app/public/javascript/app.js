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
    console.log(newReservation);
  });
});

$("#viewTable-btn").on("click", function(event) {
  event.runTableQuery();
});

function runTableQuery() {
  // Here we get the location of the root page.
  var currentURL = window.location.origin;

  $.ajax({ url: currentURL + "/api/tables", method: "GET" }).done(function(
    tableData
  ) {
    // Here we are logging the URL so we have access to it for troubleshooting
    console.log("------------------------------------");
    console.log("URL: " + currentURL + "/api/tables");
    console.log("------------------------------------");

    // Here we then log the NYTData to console, where it will show up as an object.
    console.log(tableData);
    console.log("------------------------------------");

    for (var i = 0; i < tableData.length; i++) {
      var tableSection = $("<div>");
      tableSection.addClass("well");
      tableSection.attr("id", "tableWell-" + i + 1);
      $("#tableSection").append(tableSection);

      var tableNumber = i + 1;

      $("#tableWell-" + i + 1).append(
        '<h2><span class="label label-primary">' +
          tableNumber +
          "</span> | " +
          tableData[i].tableID +
          "</h2>"
      );
    }
  });
}
