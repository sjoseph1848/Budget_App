function myFunction() {
    var x = document.getElementById("contact-info");
    var first = document.getElementById('first');
    if ((x.style.display === "none") && (first !== "")) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}