function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementsByClassName("Gallery")[0].innerHTML =
                this.responseText;

            var closeBtnX = document.getElementById("closeBtnOpt");
            closeBtnX.addEventListener("click", goHome);
        }
    };
    xhttp.open("GET", "/demo/static/Ceramics/Opt_Client.txt", true);
    xhttp.send();
}






