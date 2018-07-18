function addRegForm() {

    var RegForm = document.getElementById('SignUp');

    var LetsSignUp = function () {

        var SignUpForm = document.getElementById('RegistrationForm');
        
        var insertForm =
            '<form>\n' +
            '<p>\n' +
            'Зареєструватися\n' +
            '</\p>\n' +
            'Назва компанії:\n' +
            '<br>\n'+
            '<input name="companyName" type="text">\n' +
            '<br>\n' +
            'Email:\n' +
            '<br>\n'+
            '<input name="email" type="email">\n' +
            '<br>\n' +
            'Пароль:\n' +
            '<br>\n'+
            '<input name="psw" type="password">\n' +
            '<br>\n' +
            '<br>\n' +
            'Адреса:\n' +
            '<br>\n'+
            '<input name="address" type="text">\n' +
            '<br>\n' +
            'ЄДРПОУ:\n' +
            '<br>\n'+
            '<input name="companyCode" type="number">\n' +
            '<br>\n' +
            'Директор:\n' +
            '<br>\n'+
            '<input name="Manager" type="text">\n' +
            '<br>\n' +
            'Підпис:\n' +
            '<br>\n'+
            '<div  id="SignBox">\n'+
            '</div>\n'+
            '<br>\n' +
            '<br>\n'+
            '<div id="FormBtn">\n'+
            '<input value="Відмінити" type="reset">\n' +
            '<input value="Підтвердити" type="submit">\n' +
            '</div>\n'+
            '</form>';
        SignUpForm.innerHTML = insertForm;
        SignUpForm.style.display = "block";

    };

    RegForm.addEventListener("click", LetsSignUp);
}



