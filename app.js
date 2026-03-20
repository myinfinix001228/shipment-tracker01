// This simulates your database in the browser memory
let shipments = JSON.parse(localStorage.getItem('shipments')) || {};

function saveShipments() {
    localStorage.setItem('shipments', JSON.stringify(shipments));
}

// Function for the Tracking Page
function trackPackage() {
    const input = document.getElementById('trackingInput').value;
    const statusDiv = document.getElementById('statusResult');
    
    // Clear any old results first
    statusDiv.innerHTML = "";

    if (shipments[input]) {
        const data = shipments[input];
        statusDiv.innerHTML = `
            <div style="border: 1px solid #2d5a27; padding: 15px; margin-top: 20px; border-radius: 8px; background-color: #f9f9f9;">
                <p><strong>Status:</strong> ${data.status}</p>
                <p><strong>Location:</strong> ${data.location}</p>
                <p><strong>Last Updated:</strong> ${data.date}</p>
            </div>
        `;
    } else {
        // Professional message appears on the page, NOT as a pop-up
        statusDiv.innerHTML = '<p style="color:red; font-weight:bold; margin-top: 20px;">Invalid tracking number. Please check and try again.</p>';
    }
}