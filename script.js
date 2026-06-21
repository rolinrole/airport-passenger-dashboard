const flights = [
  { flight: "AA123", airline: "American Airlines", gate: "A12", destination: "New York", status: "Boarding" },
  { flight: "DL456", airline: "Delta Air Lines", gate: "B5", destination: "Atlanta", status: "On Time" },
  { flight: "UA789", airline: "United Airlines", gate: "C8", destination: "Chicago", status: "Delayed" },
  { flight: "B6202", airline: "JetBlue", gate: "D4", destination: "Boston", status: "Arrived" },
  { flight: "NK310", airline: "Spirit Airlines", gate: "E7", destination: "Orlando", status: "On Time" }
];

const flightTable = document.getElementById("flightTable");
const searchInput = document.getElementById("searchInput");

function displayFlights(flightList) {
  flightTable.innerHTML = "";

  flightList.forEach(flight => {
    const row = document.createElement("tr");

    const statusClass = flight.status.toLowerCase().replace(" ", "");

    row.innerHTML = `
      <td>${flight.flight}</td>
      <td>${flight.airline}</td>
      <td>${flight.gate}</td>
      <td>${flight.destination}</td>
      <td class="status-${statusClass}">${flight.status}</td>
    `;

    flightTable.appendChild(row);
  });
}

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  const filteredFlights = flights.filter(flight =>
    flight.flight.toLowerCase().includes(searchText) ||
    flight.airline.toLowerCase().includes(searchText) ||
    flight.gate.toLowerCase().includes(searchText) ||
    flight.destination.toLowerCase().includes(searchText) ||
    flight.status.toLowerCase().includes(searchText)
  );

  displayFlights(filteredFlights);
});

displayFlights(flights);