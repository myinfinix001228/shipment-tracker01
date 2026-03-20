// This simulates your database in the browser memory
let shipments = JSON.parse(localStorage.getItem('shipments')) || {};

function saveShipments() {
    localStorage.setItem('shipments', JSON.stringify(shipments));
}

// Function for the Tracking Page
function trackPackage() {
    const input = document.getElementById('trackingInput').value;
    const statusDiv = document.getElementById('statusResult');
    
    if (shipments[input]) {
        const data = shipments[input];
        statusDiv.innerHTML = `
            <div style="border: 1px solid #ccc; padding: 15px; margin-top: 10px;">
                <p><strong>Status:</strong> ${data.status}</p>
                <p><strong>Location:</strong> ${data.location}</p>
                <p><strong>Last Updated:</strong> ${data.date}</p>
            </div>
        `;
    } else {
        // This is the professional message you wanted
        statusDiv.innerHTML = '<p style="color:red; font-weight:bold;">Invalid tracking number. Please check and try again.</p>';
    }
}