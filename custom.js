const searchButton = document.getElementById("search_button");
searchButton.addEventListener("click", () => {
  const mealInput = document.getElementById("meal_input").value;
  //   console.log(mealInput);
  cookingMaster(mealInput);
});

const cookingMaster = (alphabet) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`)
    .then((res) => res.json())
    .then((data) => displayMealName(data));
};

function displayMealName(meals) {
  console.log(meals);
  const displayMeals = document.getElementById("display_meals");
  for (let i = 0; i < meals.length; i++) {
    const item = meals[i];
    console.log(item);
    mealInfo.innerHTML = `
          <p>${meals.strMeal}</p>
          `;
    displayMeals.appendChild(mealInfo.innerHTML);
    console.log(displayMeal);
  }

  document.getElementById("meal_list").innerText = meals.meals[1].strMeal;
}
