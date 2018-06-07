// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $DateTimeInput = document.querySelector("#DateTime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to DataSet initially
var filteredData = data;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current DateTime object and its fields
    var DD = filteredData[i];
    var fields = Object.keys(DD);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current date time's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = DD[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $DateTimeInput.value.trim().toLowerCase();

  // Set filteredData to an array of all date whose "date and time" matches the filter
  filteredData = data.filter(function(DD) {
    var addressState = DD.datetime.toLowerCase();

    return addressState === filterDate;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();