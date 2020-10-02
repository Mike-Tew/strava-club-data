monthArray = [
  janData,
  febData,
  marData,
  aprData,
  mayData,
  junData,
  julData,
  augData,
  sepData,
  data
];

monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// Insert day of the month
document.getElementById('date').innerHTML = dayOfMonth;

const filterData = (data, monthIndex) => {
  // Filter and sort athlete data
  const newData = data
    .filter((athlete) => athlete.mileage > 0)
    .sort((a, b) => b.mileage - a.mileage);

  // Create table rows with new data
  const table = document.getElementById('tbody');
  table.innerHTML = '';
  newData.map((athlete, index) => {
    const row = table.insertRow(index);
    row.insertCell(0).innerHTML = athlete.name;
    row.insertCell(1).innerHTML = athlete.mileage;
  });

  // Set header to the month button that was clicked
  document.getElementById('heading').innerHTML =
    monthNames[monthIndex] || 'October';
};

filterData(data);

monthArray.map((month, index) => {
  document
    .getElementById(`month-${index}`)
    .addEventListener('click', () => filterData(month, index));
});
