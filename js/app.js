$(document).on("click", ".protein", function() {
        
    var protein = $(this).attr("data-name");
        console.log(protein);
        // nightIn.yummlyID = "76925bc8";
        // nightIn.yummlyKey = "";
        // nightIn.lcboKey = "MDo1OWQ2NDhjYy1jOThhLTExZTctOGU0NS1jYmRlNTZjZTFhMjE6bjFrWlMxYTkyR3hvdzRFY2c2OW1BZWVYQnN1QlR4R3pRMmt6";
        
       // var protein = $(this).attr("data-name");
    
       var recipeAppID = 'f5710785';
       var recipeAPIkey = '8392091036762a8454001f22166942cf';
       var queryURL = 'https://api.edamam.com/search?app_id=' + recipeAppID + '&app_key=' + recipeAPIkey + '&q=' + protein;

 $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data comes back from the API
      .then(function(response) {
          console.log(response);
          
          var resultsFood = response.hits;
       
          // loop through response    
          for (let i = 0; i < 5; i++) {
              // creating a div for food
              var foodDiv = $("<div>");
              // creating p for the name of the recipe 
              var p = $("<p>").text("Recipe Name: " + resultsFood[i].recipe.label);
              // creating an image tag for the drinks in that div
              var foodImage = $("<img>");
              // add attributes to image
              foodImage.addClass("food");
              foodImage.attr("src", resultsFood[i].recipe.image);
              foodImage.attr("href", resultsFood[i].recipe.url);
              // append image and name of drink
              foodDiv.append(p);
              foodDiv.append(foodImage);
  
              $("#foodResults").prepend(foodDiv)
          }

        // Make the food clickable/go to recipe when clicked
        $(".food").on("click", function(){

            var recipe = $(this).attr("href");
            console.log(recipe);
            var recipeSite = window.open(recipe);
        })  
    })
});
    
    



$(document).on("click", ".liquor", function() {


    var liquor = $(this).attr("data-name");
    console.log(liquor);

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor;

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data comes back from the API
      .then(function(response) {
          console.log(response);
        //store an array of results
        var results = response.drinks;
       
        // loop through response    
        for (let i = 0; i < 5; i++) {
            // creating a div for the drinks
            var drinkDiv = $("<div>");
            // creating p for the name of the cockail
            var p = $("<p>").text("Cocktail Name: " + results[i].strDrink);
            // creating an image tag for the drinks in tha vcbt div
            var drinkImage = $("<img>");
            // add attributes to image
            drinkImage.addClass("drink");
            drinkImage.attr("src", results[i].strDrinkThumb);
            // append image and name of drink
            drinkDiv.append(p);
            drinkDiv.append(drinkImage);

            $("#inputResults").prepend(drinkDiv)
        }
    })


// ******* Reset Button ******* //
$(document).ready(function() {
    $("#reset-button").click(function() {
        $("#inputResults").empty();
        $("#foodResults").empty();
    });
});

//       })
    
});



