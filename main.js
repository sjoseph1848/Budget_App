function validateForm() {
    var x = document.forms["userInfo"]["firstName"].value;
    var y = document.forms["userInfo"]["lastName"].value;
    var z = document.getElementById("contact-info");
    var a = document.getElementById("budget-info");
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        z.style.display = "none";
        a.style.display = "block";
    }
}


    