function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementsByClassName("Gallery")[0].innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "Opt_Client.txt", true);
    xhttp.send();
}