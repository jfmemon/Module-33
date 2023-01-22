const loadMeals = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(response => response.json())
        .then(data => displayLoadedMeals(data.meals))
}

const displayLoadedMeals = values => {
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = ``;
    values.forEach(value => {
        console.log(value);
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = ``;
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card" onclick="mealDetails(${value.idMeal})">
                <img src="${value.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${value.strMeal}</h5>
                  <p class="card-text">${value.strInstructions.slice(0, 200)}</p>
                </div>
              </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}


const searchFood = () => {
    const searchInput = document.getElementById('search-meal');   // parent
    const mealDetails = document.getElementById('meal-details');  // for clear meal detail when click search food
    mealDetails.innerHTML = ``;   // for clear meal detail when click search food
    const searchInputText = searchInput.value;
    loadMeals(searchInputText);
    searchInput.value = '';
}


const mealDetails = mealId => {
    console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(response => response.json())
        .then(data => mealDetailsDisplay(data.meals))
}


const mealDetailsDisplay = (mealData) => {
    // console.log(mealData);
    const mealDetails = document.getElementById('meal-details');   // parent
    mealDetails.innerHTML = ``;
    mealData.forEach(meal => {
        const showMealDiv = document.createElement('div');
        showMealDiv.classList.add('card ');
        showMealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        </div>
        `;
        mealDetails.appendChild(showMealDiv);
    })

}