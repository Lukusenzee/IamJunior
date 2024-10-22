// Mock database using a JSON array
let users = [];

// Function to fetch existing users from the JSON file
async function fetchUsers() {
    const response = await fetch('users.json');
    users = await response.json();
    renderUsers();
}

// Function to render users
function renderUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the user list
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <strong>${user.name}</strong> (${user.email})
            <button onclick="editUser(${user.id})">Edit</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userList.appendChild(userDiv);
    });
}

// Function to handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userId = document.getElementById('userId').value;

    if (userId) {
        // Update user
        const userIndex = users.findIndex(user => user.id == userId);
        users[userIndex] = { id: userId, name, email };
    } else {
        // Create user
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1, // Increment ID
            name,
            email,
        };
        users.push(newUser);
    }

    // Reset form
    document.getElementById('userForm').reset();
    document.getElementById('userId').value = '';
    
    // Render updated user list
    renderUsers();
});

// Function to edit user
function editUser(id) {
    const user = users.find(user => user.id === id);
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('userId').value = user.id;
}

// Function to delete user
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderUsers();
}

// Fetch and render existing users on load
fetchUsers();
