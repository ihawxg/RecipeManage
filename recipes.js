
function recipePush() {
    for (let i = 0; i < recipes.length; i++) {

        let obj = recipes[i];

        let recipe = new Recipe(
            obj.title,
            obj.href,
            obj.ingredients,
            obj.thumbnail
        )
        manager.add(recipe);
    }
}

function printRecipes(recipes, container) {
    
    allRecipes.innerHTML = "";
    favouriteRecipes.innerHTML="";

    var recipesTemplate = document.getElementById("recipes-template").innerHTML;
    var template = Handlebars.compile(recipesTemplate);

    for (let i = 0; i < recipes.length; i++) {

        let recipe = recipes[i];
        let html = template(recipe);

        container.innerHTML += html;

        document.getElementById("favouriteButton").setAttribute("id", "fav-" + i);
        document.getElementById("cookButton").setAttribute("id", "cook-" + i);

        buttonChange(recipe, i);

    }

    searchBarSearch(); //CURRENTLY NOT WORKING :(

}

function buttonChange(recipe, index) {

    setTimeout(() => {

        let favouriteButton = document.getElementById("fav-" + index);
        let cookButton = document.getElementById("cook-" + index);

        if (client.isFavourited(recipe)) {
            favouriteButton.innerText = "Премахни от Любими";
            favouriteButton.addEventListener("click", function () {
                client.unFavourite(recipe);
                hashHandle();
            });
        }
        else {
            favouriteButton.innerText = "Добави в Любими";
            favouriteButton.addEventListener("click", function () {
                client.favourite(recipe);
                hashHandle();
            });
        }
        cookButton.addEventListener("click", function () {
            cookButton.innerHTML = "Сготви";
            client.cook(recipe);
            console.log(client.cooked);
        })
    }, "50")

}

function searchBarSearch() {

    setTimeout(() => {
        let searchBar = document.getElementById("search-bar");
        searchBar.addEventListener("keyup", function (event) {
            let text = event.target.value;
            text = text.toLowerCase();
            filtered = manager.filter(text);

            printRecipes(filtered, allRecipes);
            printRecipes(filtered, favouriteRecipes);
        })
    }, "50");

}
