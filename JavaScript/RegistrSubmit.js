function submitRegForm() {
    var regObject = {};
    var regForm = document.getElementsByClassName("RegForm");
    regObject.companyName = regForm[0].value;
    regObject.email = regForm[1].value;
    regObject.password = regForm[2].value;
    regObject.address = regForm[3].value;
    regObject.companyCode = regForm[4].value;
    regObject.manager = regForm[5].value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);
        console.log(this.status);
        if (this.readyState === 4 && this.status === 200) {
            var company = regForm[0].value;
            //alert(`Вітаємо ${company}! Ви успішно зареєструвалися`);
        }
    };

    xhttp.open("POST", "http://localhost:8082/user", true);
    xhttp.setRequestHeader('content-type', 'application/json; charset=utf-8');
    xhttp.send(JSON.stringify(regObject));


    return false;
}

