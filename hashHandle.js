function hashHandle() {
    
    let hash = location.hash.slice(1);

    switch (hash) {
        case "allRecipes":
            allRecipes.style.display = "flex";
            favouriteRecipes.style.display = "none";
            createRecipe.style.display = "none";
            myPage.style.display = "none";
            errorPage.style.display = "none";
            searchBar.style.display = "flex";
            currentProfileName.style.display = "none";
            currentProfileAge.style.display = "none";
            currentProfileAdress.style.display = "none";
            printRecipes(manager.recipes, allRecipes);
            break;
        case "favouriteRecipes":
            allRecipes.style.display = "none";
            favouriteRecipes.style.display = "flex";
            createRecipe.style.display = "none";
            myPage.style.display = "none";
            errorPage.style.display = "none";
            searchBar.style.display = "flex";
            currentProfileName.style.display = "none";
            currentProfileAge.style.display = "none";
            currentProfileAdress.style.display = "none";
            printRecipes(client.favourited, favouriteRecipes);
            break;
        case "createRecipe":
            allRecipes.style.display = "none";
            favouriteRecipes.style.display = "none";
            createRecipe.style.display = "flex";
            myPage.style.display = "none";
            errorPage.style.display = "none";
            searchBar.style.display = "none";
            currentProfileName.style.display = "none";
            currentProfileAge.style.display = "none";
            currentProfileAdress.style.display = "none";
            createRecipePrint();
            break;

        case "myPage":
            allRecipes.style.display = "none";
            favouriteRecipes.style.display = "none";
            createRecipe.style.display = "none";
            myPage.style.display = "flex";
            errorPage.style.display = "none";
            searchBar.style.display = "none";
            currentProfileName.style.display = "block";
            currentProfileAge.style.display = "block";
            currentProfileAdress.style.display = "block";
            printProfile()
            break;

        default:
            allRecipes.style.display = "none";
            favouriteRecipes.style.display = "none";
            createRecipe.style.display = "none";
            myPage.style.display = "none";
            errorPage.style.display = "flex";
            searchBar.style.display = "none";
            currentProfileName.style.display = "none";
            currentProfileAge.style.display = "none";
            currentProfileAdress.style.display = "none";
            break;
    }

}