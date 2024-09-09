// const mealForm = document.getElementById('mealForm');
// const mealType = document.getElementById('mealType');
// const mealCategory = document.getElementById('mealCategory');
// const mealResults = document.getElementById('mealResults');

// mealForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const type = mealType.value;
//   const category = mealCategory.value;

//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}&a=${type}`)
//     .then(response => response.json())
//     .then(data => {
//       mealResults.innerHTML = '';

//       if (data.meals) {
//         data.meals.forEach(meal => {
//           const mealDiv = document.createElement('div');
//           mealDiv.classList.add('meal');
//           mealDiv.innerHTML = `
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//             <h3>${meal.strMeal}</h3>
//           `;
//           mealResults.appendChild(mealDiv);
//         });
//       } else {
//         mealResults.innerHTML = '<p>No meals found.</p>';
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//       mealResults.innerHTML = '<p>An error occurred.</p>';
//     });
// });