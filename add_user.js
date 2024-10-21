function generateKeyPass() {
    let keypass = '';
    for (let i = 0; i < 16; i++) {
        keypass += Math.floor(Math.random() * 10); // Generate a random digit
    }
    return keypass;
}

function addUser() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const floor = document.getElementById('floor').value;
    const keypass = generateKeyPass();

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the floor is already occupied
    const floorTaken = users.some(user => user.floor === floor);
    if (floorTaken) {
        alert('This floor is already occupied by another user.');
        return;
    }

    users.push({ name, number, email, floor, keypass });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User added successfully! Key: ' + keypass);
}