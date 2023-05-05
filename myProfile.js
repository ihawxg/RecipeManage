function printProfile() {
    myPage.innerHTML = "";
    printTable(client.cooked);
    printEditProfile();
}

function printTable(cooks) {
    var profileTemplate = document.getElementById("profile-template").innerHTML;
    var template = Handlebars.compile(profileTemplate);
    let form = document.getElementById("myPageTable");
    let html = template(form);
    myPage.innerHTML += html;

    let h1 = document.getElementById("cookedDishes")
    for (let i = 0; i < cooks.length; i++) {
        let cook = cooks[i];
        h1.innerHTML += "- " + cook + " - " + client.counter[cook] + " броя" + "<br>" + "<br>";
    }
}

function printEditProfile() {
    var editProfileTemplate = document.getElementById("editProfile-template").innerHTML;
    var template = Handlebars.compile(editProfileTemplate);
    let form = document.getElementById("myPageContainer");
    let html = template(form);
    myPage.innerHTML += html;

    let currentPassword = document.getElementById("currentPassword")
    let personPassword = document.getElementById("personPassword");
    let personPasswordConfirm = document.getElementById("personPassword2");
    let personImage = document.getElementById("personImage");

    let button = document.getElementById("buttonCreateProfile")

    button.addEventListener("click", function () {

        if ((personPassword.value.length == 0) && (personPasswordConfirm.value.length == 0)) {
            alert("Полетата не може да бъдат празни");
        }else{
            if (currentPassword.value === client.userJSON[storage.getCurrentUserNumber()].password) {

                if (personPassword.value === personPasswordConfirm.value) {
                    client.userJSON[storage.getCurrentUserNumber()].password = personPassword.value;
                    alert("Паролата на Потребител: " + client.userJSON[storage.getCurrentUserNumber()].username.toUpperCase() + " е сменена успешно");
                    localStorage.setItem("users", JSON.stringify(client.userJSON));
                }
            } else {
                alert("Грешна текуща парола");
            }
        }

        

        if(personImage.value.length >=1){
            document.getElementById("profilePicture").src = personImage.value;
        }

    })
}
