function createRecipePrint() {

    var createTemplate = document.getElementById("create-template").innerHTML;
    var template = Handlebars.compile(createTemplate);
    let form = document.getElementById("formContainer");
    let html = template(form);
    createRecipe.innerHTML = html;

    setTimeout(() => {

        let button = document.getElementById("buttonCreateRecipe");

        button.addEventListener("mouseenter", function () {
            isInputEmpty();
        })

        button.addEventListener("mouseleave", function () {
            revertTextToNormal();
        })

        button.addEventListener("click", function () {
            buttonCreateRecipe();
        })

    }, "200");

}

function isInputEmpty() {
    if ((image.value.length === 0)) {
        image.placeholder = "МОЛЯ ПОПЪЛНЕТЕ ПОЛЕТО !";
        image.classList.add("placeholder");
    }
    if ((linkToRecipe.value.length === 0)) {
        linkToRecipe.placeholder = "МОЛЯ ПОПЪЛНЕТЕ ПОЛЕТО !";
        linkToRecipe.classList.add("placeholder");
    }
    if ((ingredients.value.length === 0)) {
        ingredients.placeholder = "МОЛЯ ПОПЪЛНЕТЕ ПОЛЕТО !";
        ingredients.classList.add("placeholder");
    }
    if ((recipeName.value.length === 0)) {
        recipeName.placeholder = "МОЛЯ ПОПЪЛНЕТЕ ПОЛЕТО !";
        recipeName.classList.add("placeholder");
    }
}

function revertTextToNormal() {
    image.placeholder = "Въведи линк на снимка"
    image.classList.remove("placeholder");

    linkToRecipe.placeholder = "Въведи линк към подробна рецепта"
    linkToRecipe.classList.remove("placeholder");

    ingredients.placeholder = "Въведи стъставки";
    ingredients.classList.remove("placeholder");

    recipeName.placeholder = "Въведи име на рецепта";
    recipeName.classList.remove("placeholder");
}

function buttonCreateRecipe() {
    if ((image.value.length > 0) && (linkToRecipe.value.length > 0) && (ingredients.value.length > 0) && (recipeName.value.length > 0)) {
        manager.createRecipe(recipeName.value, ingredients.value, linkToRecipe.value, image.value);
        image.value = "";
        linkToRecipe.value = "";
        ingredients.value = "";
        recipeName.value = "";
        alert("Рецептата е създадена успешно");
    } else {
        alert("Моля въвдете всички полета");
    }
}