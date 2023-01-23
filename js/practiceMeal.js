const loadMeal = (mealName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => loadedMealDisplay(data.meals));
}

const loadedMealDisplay = mealData => {
    const loadedMeal = document.getElementById('load-meal');
    loadedMeal.innerHTML = ``;
    mealData.forEach(meal => {
        // console.log(meal)
        // console.log(meal.strMeal)
        const createMealDiv = document.createElement('div');
        createMealDiv.classList.add('col');
        createMealDiv.innerHTML = `
                  <div onclick="mealDetails(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                    </div>
                  </div>
        `;
        loadedMeal.appendChild(createMealDiv);

    })
}

const loadSearchedMeal = () => {
    const mealInformation = document.getElementById('meal-information');
    mealInformation.innerHTML = ``;
    const searchMeal = document.getElementById('search-meal');
    const searchMealText = searchMeal.value;
    loadMeal(searchMealText);
    searchMeal.value = ``;
}

const mealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(response => response.json())
        .then(data => clickedMealDetails(data.meals[0]))
}

const clickedMealDetails = values => {
    const mealInformation = document.getElementById('meal-information');
    mealInformation.innerHTML = ``;
    const mealInformationDiv = document.createElement('div');
    mealInformationDiv.classList.add('col');
    mealInformationDiv.innerHTML = `
        <div class="card" style="width: 23rem;">
                    <img src="${values.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${values.strMeal}</h5>
                      <p class="card-text">${values.strInstructions.slice(0, 100)}</p>
                    </div>
                  </div>
        `;
    mealInformation.appendChild(mealInformationDiv);
}
