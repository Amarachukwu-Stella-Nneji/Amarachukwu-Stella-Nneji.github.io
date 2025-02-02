// JavaScript Validation for the pet health form
function validateForm() {
    var youremail = document.forms["myForm"]["email"].value;
    var petage = document.forms["myForm"]["petsage"].value;
    var symptoms = document.forms["myForm"]["Symptoms"];

    // Check if pet age is entered
    if (petage == "") {
        alert("Pet age must be filled out");
        return false;
    }

    if (youremail == "") {
        alert("E-mail must be filled out");
        return false;
    }

    var symptomChecked = false;
    for (var i = 0; i < symptoms.length; i++) {
        if (symptoms[i].checked) {
            symptomChecked = true;
            break;
        }
    }

    if (!symptomChecked) {
        alert("You did not choose any of the symptoms!");
        return false;
    }
}
