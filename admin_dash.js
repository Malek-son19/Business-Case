document.addEventListener('DOMContentLoaded', function() {
    displayUsers();
});

function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `Name: ${user.name}, Floor: ${user.floor}, KeyPass: ${user.keypass} `;


                // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() { editUser(index); };
        userDiv.appendChild(editButton);
        // Delete button

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() { deleteUser(index); };
        userDiv.appendChild(deleteButton);
        // copy button
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy Key';
        copyButton.onclick = function() { copyKeyToClipboard(user.keypass); };
        userDiv.appendChild(copyButton);

        userList.appendChild(userDiv);
    });
}


function copyKeyToClipboard(keypass) {
    navigator.clipboard.writeText(keypass).then(function() {
        alert('Key copied to clipboard!');
    }, function(err) {
        console.error('Failed to copy key:', err);
    });
}


function editUser(index) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users[index];
    const newName = prompt('Enter new name:', user.name);
    if (newName) {
        user.name = newName;
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }
}

function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (confirm(`Are you sure you want to delete ${users[index].name}?`)) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }
}