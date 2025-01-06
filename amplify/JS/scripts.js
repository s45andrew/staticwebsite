function toggleContactForm() {
    var form = document.getElementById("contactform");
    form.style.display = (form.style.display === "none") ? "block" : "none";
}

function changeWindowColor(color) {
    document.getElementById("window").style.backgroundColor = color;
}

function openNewPage(url, color) {
    document.getElementById("inner-iframe").src = url;
    changeWindowColor(color);
}
