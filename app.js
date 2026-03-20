// This simulates your database in the browser memory
let shipments = JSON.parse(localStorage.getItem('shipments')) || [];

function saveShipments() {
    localStorage.setItem('shipments', JSON.stringify(shipments));
}