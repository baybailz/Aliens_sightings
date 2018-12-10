// Assign the data from `data.js` to a descriptive variable
var alien = data;
var tbody = d3.select("tbody");

// Select the submit button
var submit = d3.select("#filter-btn");

alien.forEach(element => {
  var row = tbody.append("tr");
  Object.entries(element).forEach(function([key, value]) {
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value)
  });
});


submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(alien);

  var filteredData = alien.filter(alien => alien.datetime === inputValue);

  console.log(filteredData);

  d3.select("#table-refresh").html("")

  filteredData.forEach(element => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(function([key, value]) {
      console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value)
    });
  });
  
  
  
  
  // var date = filteredData.map(alien => alien.datetime);
  // var city = filteredData.map(alien => alien.city);
  // var state = filteredData.map(alien => alien.state);
  // var country = filteredData.map(alien => alien.country);
  // var shape = filteredData.map(alien => alien.shape);
  // var comment = filteredData.map(alien => alien.comments);

  

  

  // d3.select(".table-head")
  //   .append("tr").text(`${city}`)
  //   .append("tr").text(`City: ${city}`)
  //   .append("tr").text(`State: ${state}`)
  //   .append("tr").text(`Country: ${country}`)
  //   .append("tr").text(`Shape: ${shape}`)
  //   .append("tr").text(`Comment: ${comment}`);
});