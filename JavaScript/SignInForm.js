function addSignInForm () {

    var SignInBtn = document.getElementById("SignIn");

    var letsSignIn = function () {
        var SignInForm = document.getElementById('LoginForm');

        var insertFormUK =
            '<form>\n' +
            '<p>\n' +
            'Увійти\n' +
            '<span class="closeBtn">\n' +
            'X\n' +
            '</span>\n' +
            '</\p>\n' +
            '<br>\n' +
            'Email:\n' +
            '<br>\n' +
            '<input name="email" type="email" required>\n' +
            '<br>\n' +
            'Пароль:\n' +
            '<br>\n' +
            '<input name="psw" type="password" required>\n' +
            '<br>\n' +
            '<div id="FormBtn">\n' +
            '<input value="Відмінити" type="reset" id="FormBtnR">\n' +
            '<input value="Підтвердити" type="submit" id="FormBtnS">\n' +
            '</div>\n' +
            '</form>';

        var insertFormEN =
            '<form>\n' +
            '<p>\n' +
            'LogIn\n' +
            '<span class="closeBtn">\n' +
            'X\n' +
            '</span>\n' +
            '</\p>\n' +
            '<br>\n' +
            'Email:\n' +
            '<br>\n' +
            '<input name="email" type="email" required>\n' +
            '<br>\n' +
            'Password:\n' +
            '<br>\n' +
            '<input name="psw" type="password" required>\n' +
            '<br>\n' +
            '<div id="FormBtn">\n' +
            '<input value="Cancel" type="reset" id="FormBtnR">\n' +
            '<input value="Submit" type="submit" id="FormBtnS">\n' +
            '</div>\n' +
            '</form>';

        if (document.getElementById("UK").tagName= "span")
        {
            SignInForm.innerHTML = insertFormUK;
            SignInForm.style.display = "block";
        }
        else if (document.getElementById("UK").tagName = "a")
            {
            SignInForm.innerHTML = insertFormEN;
            SignInForm.style.display = "block";
            }

        var closeBtnX = document.getElementsByClassName('closeBtn');
        var closeForm = function () {
            SignInForm.style.display = "none";
        };
        var i;
        for (i=0; i<closeBtnX.length; i++){
            closeBtnX[i].addEventListener("click", closeForm);//make 'X' to close form
        };

    };

    SignInBtn.addEventListener("click", letsSignIn);
}