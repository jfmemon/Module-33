const loadUsers = () => {
    const url = `https://randomuser.me/api/?gender=female`
    fetch(url)
    .then(response => response.json())
    .then(data => displayUsers(data.results[0]))
    .catch(error => console.log(error))
}


const loadAsync = async() => {
    const url = `https://randomuser.me/api/?gender=female`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayUsers(data.results[0]);
    }
    catch (error) {
        console.log(error);
    }
}


const displayUsers = value => {
    console.log(value)
}