function validateKey() {
    const inputKey = document.getElementById('masterkey').value;
    const confirmKey = document.getElementById('conform_masterkey').value;

    if (inputKey !== confirmKey) {
        alert('The keys do not match. Please try again.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.keypass === inputKey);

    if (user) {
        // Redirect to the specific dashboard based on the user's assigned floor
        if (user.floor === "First Floor") {
            window.location.href = '1floor_dash.html';
        } else if (user.floor === "Second Floor") {
            window.location.href = '2floor_dash.html';
        } else if (user.floor === "Third Floor") {
            window.location.href = '3floor_dash.html';
        }
    } else {
        alert('Invalid master key. Please try again.');
    }
}