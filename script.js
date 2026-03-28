// Store flights (you can add more)
const flights = [
    { from: "Lagos", to: "Kano", time: "10:00 AM", price: "₦120,000" },
    { from: "Lagos", to: "Abuja", time: "2:00 PM", price: "₦150,000" },
    { from: "Abuja", to: "Kano", time: "6:00 PM", price: "₦100,000" }
];

// SEARCH FUNCTION
function searchFlight(event) {
    event.preventDefault();

    let from = document.getElementById("from").value.trim();
    let to = document.getElementById("to").value.trim();
    let date = document.getElementById("date").value;
    let passengers = document.getElementById("passengers").value;

    let resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";

    if (from === "" || to === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }

    // Filter flights
    let foundFlights = flights.filter(flight =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase()
    );

    if (foundFlights.length === 0) {
        resultDiv.innerHTML = "<p>No flights found!</p>";
        return;
    }

    // Display flights
    foundFlights.forEach(flight => {
        let flightHTML = `
            <div class="flight-card">
                <p><strong>${flight.from} → ${flight.to}</strong></p>
                <p>Time: ${flight.time}</p>
                <p>Price: ${flight.price}</p>
                <button onclick="bookFlight('${flight.from} → ${flight.to}', '${flight.price}', '${date}', '${passengers}')">
                    Book Now
                </button>
            </div>
        `;
        resultDiv.innerHTML += flightHTML;
    });
}

// BOOK FUNCTION
function bookFlight(route, price, date, passengers) {
    let confirmBooking = confirm("Confirm booking for " + route + "?");

    if (!confirmBooking) {
        return;
    }

    // Generate ticket
    let ticketDiv = document.getElementById("ticket");

    ticketDiv.innerHTML = `
        <div class="ticket-box">
            <h2>🎫 Flight Ticket</h2>
            <p><strong>Route:</strong> ${route}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Passengers:</strong> ${passengers}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p>Status: ✅ Confirmed</p>
        </div>
    `;

    // Scroll to ticket
    ticketDiv.scrollIntoView({ behavior: "smooth" });
}
