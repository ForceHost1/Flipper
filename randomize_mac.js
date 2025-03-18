// Function to generate a random MAC address
function getRandomMAC() {
    let mac = "02"; // Locally Administered Address (LAA) to prevent conflicts
    for (let i = 1; i < 6; i++) {
        let randByte = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
        mac += ":" + randByte;
    }
    return mac;
}

// Apply the randomized MAC address
function setRandomMAC() {
    let newMAC = getRandomMAC();
    console.log("Setting MAC Address to:", newMAC);

    // Assuming Flipper Zero has a command to change MAC, replace below
    // Example for WiFi/Bluetooth Module (if supported)
    exec(`ifconfig wlan0 hw ether ${newMAC}`);
}

// Execute the function
setRandomMAC();
