const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountry(data))
}

const displayCountry = elements => {
    for(const element of elements) {
        // console.log(element);
        const countryInformation = document.getElementById('country-information');
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <p>Country Name: ${element.name.common}</p>
        <p>Capital: ${element.capital ? element.capital[0] : 'No capital'}</p>
        <button onclick="singleCountryDetails('${element.cca2}')">Details</button>
        `;
        countryInformation.appendChild(countryDiv);
    }
}


const singleCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`           // using dynamic API, using template string
    fetch(url)
    .then(response => response.json())
    .then(data => displaySingleCountryDetails(data[0]))
}


const displaySingleCountryDetails = country => {
    // console.log(country)
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <h3>Country Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `;
    countryDetails.appendChild(countryDetails.innerHTML)
}










// {/* <p>Time Zones: ${element.timezones}</p> */}