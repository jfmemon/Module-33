const loadRandomUsers = () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => displayRandomUser(data.results))
}


let displayRandomUser = values => {
    for(const value of values) {
        console.log(value);
        const randomUsers = document.getElementById('random-user');
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <p>Name: ${value.name.title} ${value.name.first} ${value.name.last}</p>
        <p>Gender: ${value.gender}</p>
        <p>Location- City: ${value.location.city}, Country: ${value.location.country}</p>
        <p>Email: ${value.email}</p>
        <p>Phone: ${value.phone}</p>
        `;
        randomUsers.appendChild(userDiv);
    }
}