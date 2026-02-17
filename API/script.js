const API_URL = 'https://jsonplaceholder.typicode.com/users';
const userContainer = document.getElementById('user-container');
const errorMessage = document.getElementById('error-message');

async function fetchAndDisplayUsers() {
    try {
        errorMessage.textContent = '';
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const users = await response.json();

        users.forEach(user => createUserCard(user));

    } catch (error) {
        console.error('Error:', error);
        errorMessage.textContent = 'Failed to load user data.';
    }
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';

    const name = document.createElement('h3');
    name.textContent = user.name;

    const email = document.createElement('p');
    email.innerHTML = `<strong>Email:</strong> ${user.email}`;

    /// Street
    const street = document.createElement('p');
    street.innerHTML = `<strong>Street:</strong> ${user.address.street}`;

    /// City
    const city = document.createElement('p');
    city.innerHTML = `<strong>City:</strong> ${user.address.city}`;

    /// Zipcode
    const zipcode = document.createElement('p');
    zipcode.innerHTML = `<strong>Zipcode:</strong> ${user.address.zipcode}`;

    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(street);
    card.appendChild(city);
    card.appendChild(zipcode);

    userContainer.appendChild(card);
}

fetchAndDisplayUsers();