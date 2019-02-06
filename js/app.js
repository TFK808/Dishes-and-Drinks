// // This js file will have our code
// //changed const dateNight to nightIN
// const nightIn = {};
// nightIn.yummlyID = "76925bc8";
// nightIn.yummlyKey = "ca3a11a18cc19bc2b40a133aabd2d8f3";
// nightIn.lcboKey = "MDo1OWQ2NDhjYy1jOThhLTExZTctOGU0NS1jYmRlNTZjZTFhMjE6bjFrWlMxYTkyR3hvdzRFY2c2OW1BZWVYQnN1QlR4R3pRMmt6";

// $(function() {
//     nightIn.init();
// });

// nightIn.init = function() {
//     nightIn.eventListener();
// };
// //changed sumit to sumbit-button
// nightIn.eventListener = function() {
//     $('.submit-button').on('click', function (e) {
//         e.preventDefault();
//         const mainIngredient = $("inputProtein").val();
//         nightIn.determineYummlyUrl(mainIngredient);
//     });
    
// };

// // Determine which url to use for yummly api call
// nightIn.determineYummlyUrl = function(mainIngredient) {
//     if (mainIngredient === "vegan" || mainIngredient === "vegetarian") {
//         activeUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${nightIn.yummlyID}&_app_key=${nightIn.yummlyKey}&q=${mainIngredient}&allowedCourse[]=course^course-Main+Dishes&maxResult=25`;
//     } else {
//         activeUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${nightIn.yummlyID}&_app_key=${nightIn.yummlyKey}&allowedCourse[]=course^course-Main+Dishes&allowedIngredient[]=${mainIngredient}&maxResult=25`;
//     }
//     nightIn.findRecipes(activeUrl);
    
// };

// // Find recipes based on chosen main ingredient/diet
// nightIn.findRecipes = function(url) {
//     let activeUrl = url;
//     $.ajax({
//         url: activeUrl,
//         method: "GET",
//         dataType: "jsonp",
//         headers: {
//             "X-Yummly-App-ID":"app-id",
//             "X-Yummly-App-Key":"app-key",
//             format: "jsonp"
//         }
//     }).then(function(result) {
//         recipeArray = Array.from(result.matches);
//         nightIn.pickRecipe(result.matches);
//     });
// };

// nightIn.pickRecipe = function(array) {
//     const removed = recipeArray.shift();
//     nightIn.getRecipeDetails(recipeArray[0].id);
// };

// nightIn.getRecipeDetails = function(array) {
//     const recipeId = array;
//     $.ajax({
//         url: `http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=${nightIn.yummlyID}&_app_key=${nightIn.yummlyKey}`,
//         method: "GET",
//         dataType: "jsonp",
//         headers: {
//             "X-Yummly-App-ID":"app-id",
//             "X-Yummly-App-Key":"app-key",
//             format: "jsonp"
//         }
//     }).then(function(result) {
//         recipeDetails = result;
//         nightIn.displayRecipe(recipeDetails);
//     });
// };
// nightIn.displayRecipe = function(array) {
//     $('.recipe a').attr('href', array.attribution.url);
//     $('.recipe h2.food').html(array.name);
//     $('.recipe img.food').attr('src',array.images[0].hostedLargeUrl);
//     $('.recipe .recipeCredit a').attr('href', array.attribution.url);
//     $('.recipe .recipeCredit p').html(array.attribution.text);
//     $('.recipe .recipeCredit img').attr('src', array.attribution.logo)
//     $('.recipe .cookTime').html(`Cook time: <span class="value">${array.cookTime}</span>`);
//     $('.recipe .totalTime').html(`Total time: <span class="value">${array.totalTime}</span>`);
//     $('.recipe .servings').html(`Servings: <span class="value">${array.numberOfServings}</span>`);

//     $("ul.ingredients li").remove();    
//     const ingredients = array.ingredientLines;
//     for(items in ingredients){
//         let singleIngredient = `<li>${ingredients[items]}</li>`;
//         $("ul.ingredients").append(singleIngredient);
//     }
// };

$(document).on("click", ".liquor", function() {


    var liquor = $(this).attr("data-name");
    // var wine = $("#wine").val().trim();
    // var beer = 
    console.log(liquor);

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor;

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data comes back from the API
      .then(function(response) {
    //       console.log(response);
    

      })
    
});



