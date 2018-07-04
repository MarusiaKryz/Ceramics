function addRegForm() {

    var RegForm = document.getElementById('SignUp');

    var LetsSignUp = function () {
        var SignUpForm = document.getElementById('RegistrationForm');
        var insertForm =
            '<form>\n' +
            '<p>\n' +
            'Зареєструватися\n' +
            '<span class="closeBtn">\n' +
            'X\n' +
            '</span>\n' +
            '</\p>\n' +
            'Назва компанії:\n' +
            '<input name="companyName" type="text" required>\n' +
            '<br>\n' +
            'Email:\n' +
            '<br>\n' +
            '<input name="email" type="email" required>\n' +
            '<br>\n' +
            'Пароль:\n' +
            '<br>\n' +
            '<input name="psw" type="password" required>\n' +
            '<br>\n' +
            'Адреса:\n' +
            '<br>\n' +
            '<input name="address" type="text" required>\n' +
            '<br>\n' +
            'ЄДРПОУ:\n' +
            '<br>\n' +
            '<input name="companyCode" type="number" required>\n' +
            '<br>\n' +
            'Директор:\n' +
            '<br>\n' +
            '<input name="Manager" type="text" required>\n' +
            '<br>\n' +
            'Підпис:\n' +
            '<br>\n' +
            '<div id="SignBox">\n' +
            '</div>\n' +
            '<div class="FormBtn">\n' +
            '<input value="Відмінити" type="reset" class="FormBtnR">\n' +
            '<input value="Підтвердити" type="submit" class="FormBtnS">\n' +
            '</div>\n' +
            '</form>';
        SignUpForm.innerHTML = insertForm;
        SignUpForm.style.display = "block";

        /* insert created form into div id='RegistrationForm'
               and make it modal by style.display = "block"*/

            var Signature = document.getElementById("SignBox");

            var onMouseMove = function (event) {
                console.log(event);
                var signDot = document.createElement("div");
                signDot.className = "signDotClass";
                Signature.appendChild(signDot);
                signDot.style.top = event.clientY + "px";
                signDot.style.left = event.clientX + "px";
            };
            Signature.addEventListener("mousemove", onMouseMove);
//make signature

        var closeBtnX = document.getElementsByClassName('closeBtn');
        var closeForm = function () {
            SignUpForm.style.display = "none";
        };
        var i;
        for (i=0; i<closeBtnX.length; i++){
            closeBtnX[i].addEventListener("click", closeForm);//make 'X' to close form
        };

    };

    RegForm.addEventListener("click", LetsSignUp);
}