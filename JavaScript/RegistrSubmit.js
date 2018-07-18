function submitRegForm()
{
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
     if (this.readyState === 4 && this.status === 200) {
       console.log(newUser);
     }
 };
    var newUser = '' +
        '         {' +
        '             "address": "string",' +
        '             "companyCode": 0,' +
        '             "companyName": "string",' +
        '             "email": "string",' +
        '             "id": 0,' +
        '             "manager": "string",' +
        '             "password": "string"' +
        '         }';
 xhttp.open("POST", "http://localhost:8082/user", true);
 xhttp.send(newUser);

    alert("Вітаємо ${Company}! Ви успішно зареєструвалися");

}



// var newUserObj = JSON.parse(newUser);
