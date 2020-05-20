// Filter and sort athlete data
const newData = data
  .filter((athlete) => athlete.mileage > 0)
  .sort((a, b) => b.mileage - a.mileage);

// Insert day of the month
document.getElementById('date').innerHTML = dayOfMonth;

// Create table rows with new data
const table = document.getElementById('tbody');
newData.map((athlete, index) => {
  const row = table.insertRow(index);
  row.insertCell(0).innerHTML = athlete.name;
  row.insertCell(1).innerHTML = athlete.mileage;
});
