// --- SHARED DATABASE LOGIC ---
// This saves your shipments in the browser's memory (localStorage)
let shipments = JSON.parse(localStorage.getItem('shipments')) || {};

function saveShipments() {
    localStorage.setItem('shipments', JSON.stringify(shipments));
}

// --- ADMIN PANEL LOGIC (admin.html) ---
function createShipment() {
    const id = document.getElementById('shipmentId').value;
    const status = document.getElementById('shipmentStatus').value;
    const location = document.getElementById('shipmentLocation').value;
    const date = new Date().toLocaleString();

    if (id && status && location) {
        // Save to our object
        shipments[id] = { status, location, date };
        saveShipments();
        
        alert("✅ Success! Shipment " + id + " has been created.");
        
        // Clear the inputs for the next one
        document.getElementById('shipmentId').value = '';
        document.getElementById('shipmentLocation').value = '';
    } else {
        alert("⚠️ Please fill in all fields (ID, Status, and Location).");
    }
}

// --- TRACKING PAGE LOGIC (index.html) ---
function trackPackage() {
    const input = document.getElementById('trackingInput').value;
    const statusDiv = document.getElementById('statusResult');
    
    // Clear old results
    statusDiv.innerHTML = "";

    if (shipments[input]) {
        const data = shipments[input];
        statusDiv.innerHTML = `
            <div style="border: 1px solid #2d5a27; padding: 20px; margin-top: 20px; border-radius: 10px; background-color: #f0fdf4; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="margin-top:0; color: #166534;">Shipment Found</h3>
                <p><strong>Tracking ID:</strong> ${input}</p>
                <p><strong>Current Status:</strong> ${data.status}</p>
                <p><strong>Current Location:</strong> ${data.location}</p>
                <p><strong>Last Updated:</strong> ${data.date}</p>
            </div>
        `;
    } else {
        // Professional error message (No "Admin" mention)
        statusDiv.innerHTML = `
            <div style="color: #991b1b; background-color: #fef2f2; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #f87171;">
                <strong>Invalid tracking number.</strong> Please check the code and try again.
            </div>
        `;
    }
}