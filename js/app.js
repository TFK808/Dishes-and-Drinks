

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
            // creating an image tag for the drinks in that div
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
        })
    })
    
});



