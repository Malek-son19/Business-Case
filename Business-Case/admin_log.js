
function validateKey() {
    var inputKey = document.getElementById('masterkey').value; 
    var correctKey = "1";
    if(inputKey === correctKey) { // If the key is right
        alert("Access Granted");
        window.location.href = 'admin_dash.html'; // connect to the admin dashboard page
    } else { // If the key is not right
        document.getElementById('message').innerHTML = "Access Denied: Incorrect Key";
        document.getElementById('masterkey').value = ''; // Optionally clear the input
    }
}  