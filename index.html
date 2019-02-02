//This yummlyID API was taken from GabyCodes 
//Also most of code was borrowed from Github
//changed const from dareNight to nightIn

const nightIn
 = {};
nightIn
.yummlyID = "76925bc8";
nightIn
.yummlyKey = "ca3a11a18cc19bc2b40a133aabd2d8f3";


$(function() {
    nightIn
    .init();
});

nightIn
.init = function() {
    nightIn
    .eventListener();
};
//  event handling function '(e)'
nightIn
.eventListener = function() {
    $('.submit').on('click', function (e) {
        e.preventDefault();
        const mainIngredient = $("input[name=ingredient]:checked").val();
        nightIn
        .determineYummlyUrl(mainIngredient);
    });
    $(".differentRecipe").on('click', (e) => {
        e.preventDefault();
        nightIn
        .pickRecipe();
        nightIn
        .pickWine();
    });
    $(".backToTop").on('click', (e) => {
        e.preventDefault();
        $(".tagSection").css({
            "top": "0"
        });
        $(".foodAndWine").css({
            "top": "-115vh"
        });
    });
    $(".enterSite").on('click', (e) => {
        e.preventDefault();
        $(".splashPage").css({"display":"none"});
        $(".tagSection").css({"display":"block"});
    });
    $(".submit").on('click', (e) => {
        e.preventDefault();
        $(".tagSection").css({
            "top": "-100vh"
        });
        $(".foodAndWine").css({
            "top": "0"
        });
    });
    $(".facade").on('click', (e) => {
        e.preventDefault();
        $(".facade").css({
            "display": "none"
        });
        if ($(".facade").css({"display":"none"})) {
            $(".facade").css({
                "display": "absolute"
            });
        }
        $(".wine").css({
            "z-index": "2",
            "height": "auto"
        });
        $(".hideWine").css({
            "display": "block"
        });
        $(".wine .imageHolder").css({
            "height": "auto"
        });
    });
    $(".hideWine").on('click', (e) => {
        e.preventDefault();
        $(".facade").css({
            "display": "block"
        });
        $(".wine").css({
            "z-index": "0",
            "height":"400px"
        });
        $(".hideWine").css({
            "display": "none"
        });
        $(".wine .imageHolder").css({
            "height": "0"
        });
    });
};

// Determine which url to use for yummly api call

nightIn
.determineYummlyUrl = function(mainIngredient) {
    if (mainIngredient === "vegan" || mainIngredient === "vegetarian") {
        activeUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${nightIn
        .yummlyID}&_app_key=${nightIn
        .yummlyKey}&q=${mainIngredient}&allowedCourse[]=course^course-Main+Dishes&maxResult=25`;
    } else {
        activeUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${nightIn
        .yummlyID}&_app_key=${nightIn
        .yummlyKey}&allowedCourse[]=course^course-Main+Dishes&allowedIngredient[]=${mainIngredient}&maxResult=25`;
    }
    nightIn
    .findRecipes(activeUrl);
    nightIn
    .getWine(mainIngredient);
};

// Find recipes based on chosen main ingredient/diet
nightIn
.findRecipes = function(url) {
    let activeUrl = url;
    $.ajax({
        url: activeUrl,
        method: "GET",
        dataType: "jsonp",
        headers: {
            "X-Yummly-App-ID":"app-id",
            "X-Yummly-App-Key":"app-key",
            format: "jsonp"
        }
    }).then(function(result) {
        recipeArray = Array.from(result.matches);
        nightIn
        .pickRecipe(result.matches);
    });
};

nightIn
.pickRecipe = function(array) {
    const removed = recipeArray.shift();
    nightIn
    .getRecipeDetails(recipeArray[0].id);
};

nightIn
.getRecipeDetails = function(array) {
    const recipeId = array;
    $.ajax({
        url: `http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=${nightIn
        .yummlyID}&_app_key=${nightIn
        .yummlyKey}`,
        method: "GET",
        dataType: "jsonp",
        headers: {
            "X-Yummly-App-ID":"app-id",
            "X-Yummly-App-Key":"app-key",
            format: "jsonp"
        }
    }).then(function(result) {
        recipeDetails = result;
        nightIn
        .displayRecipe(recipeDetails);
    });
};
nightIn
.displayRecipe = function(array) {
    $('.recipe a').attr('href', array.attribution.url);
    $('.recipe h2.food').html(array.name);
    $('.recipe img.food').attr('src',array.images[0].hostedLargeUrl);
    $('.recipe .recipeCredit a').attr('href', array.attribution.url);
    $('.recipe .recipeCredit p').html(array.attribution.text);
    $('.recipe .recipeCredit img').attr('src', array.attribution.logo)
    $('.recipe .cookTime').html(`Cook time: <span class="value">${array.cookTime}</span>`);
    $('.recipe .totalTime').html(`Total time: <span class="value">${array.totalTime}</span>`);
    $('.recipe .servings').html(`Servings: <span class="value">${array.numberOfServings}</span>`);

    $("ul.ingredients li").remove();    
    const ingredients = array.ingredientLines;
    for(items in ingredients){
        let singleIngredient = `<li>${ingredients[items]}</li>`;
        $("ul.ingredients").append(singleIngredient);
    }
};

nightIn
.getWine = function(mainIngredient) {
    ingredient = mainIngredient;
    keywords = "wine";
    description = "description";

    if (ingredient === "chicken") {
        keywords = "chardonnay+white+wine";
        description = "Pair this with a crisp Chardonnay.";
    }  else if ( ingredient === "beef") {
        keywords = "red+wine+noir";
        description = "Pair recipe with a light to medium-bodied Pinot Noir.";
    } else if ( ingredient === "pork") {
        keywords = "pinot+grigio+wine";
        description = "This recipe pairs well with a zesty Pinot Grigio.";
    } else if ( ingredient === "fish") {
        keywords = "wine+sauvignon+blanc";
        description = "Pair with a fresh and floral Sauvignon Blanc."
    
    } else if (ingredient === "vegetarian") {
        keywords = "wine+red+noir";
        description = "Pair with a light to medium-bodied Pinot Noir.";
    }
    
    $.ajax({
        url: `http://lcboapi.com/products?access_key=${nightIn
        .lcboKey}&q=${keywords}&start=2`,
        method: "GET",
        dataType: "json",
        data: {
            Authorization: "Token MDo1OWQ2NDhjYy1jOThhLTExZTctOGU0NS1jYmRlNTZjZTFhMjE6bjFrWlMxYTkyR3hvdzRFY2c2OW1BZWVYQnN1QlR4R3pRMmt6",
            is_dead : false,
            tags: "wine"
        }
    }).then(function(result) {
        wineArray = Array.from(result.result);
        nightIn
        .pickWine(wineArray);
    });
};

nightIn
.pickWine = function (array) {
    wineArray.shift();
    nightIn
    .displayWine(wineArray[0]);
};

nightIn
.displayWine = function (array) {
    $('.wine p').html(array.name);
    $('.wine img.wineImage').attr('src', array.image_url);
    $('.wine h2').html(description);
};