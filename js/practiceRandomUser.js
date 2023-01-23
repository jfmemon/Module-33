const loadRandomUser = () => {
    const url = `https://randomuser.me/api/`;
    fetch(url)
        .then(response => response.json())
        .then(data => loadRandomUserDisplay(data.results[0]))
}

const loadRandomUserDisplay = users => {
    const randomUser = document.getElementById('random-user');
    randomUser.innerHTML = ``;
    // console.log(users)
    const randomUserDiv = document.createElement('div');
    randomUserDiv.classList.add('card');
    randomUserDiv.innerHTML = `
            <div class="row g-0">
                <div class="col-lg-4">
                    <img src="${users.picture.large}" class="img-fluid h-auto rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title" style="">Name: ${users.name.title} ${users.name.first} ${users.name.last}</h5>
                        <p class="card-text">Cell: ${users.cell}</p>
                        <p class="card-text">Email: ${users.email}</p>
                        <p class="card-text">Gender: ${users.gender}</p>
                        <p class="card-text">Location:
                            Street number/name: ${users.location.street.number}/${users.location.street.name} </p>
                            City: ${users.location.city}<br>
                            Country: ${users.location.country}
                    </div>
                </div>
            </div>
        `;
    randomUser.appendChild(randomUserDiv);
}