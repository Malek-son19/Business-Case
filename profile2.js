document.addEventListener('DOMContentLoaded', function () {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const selectedFloor = 'Second Floor'; // Match this exactly with the saved floor number

    // Find the user for the current floor
    const user = users.find(u => u.floor === selectedFloor);

    if (user) {
        // Display user info
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('userNumber').textContent = user.number;
        document.getElementById('userFloor').textContent = user.floor;
        document.getElementById('userKey').textContent = user.keypass;
    } else {
        // If no user found for this floor, show a message
        document.body.innerHTML = '<p>No user data available for this floor.</p>';
    }
});
