function addRegForm() {

    var RegForm = document.getElementById('SignUp'); //li Зареєструватися

    var LetsSignUp = function () {
        var insertForm = document.getElementById('RegFormTemp');
        var clon = insertForm.content.cloneNode(true);
        document.body.appendChild(clon);

        var SignUpForm = document.getElementById('RegistrationForm');
        SignUpForm.style.display = "block";
        //SignUpForm.showModal();
        document.getElementById('PageContent').style.backgroundColor = "rgba(0,0,0,0.2)";

        //make 'X' to close form
        var closeBtnX = document.getElementsByClassName('closeBtn');
        var closeForm = function () {
            SignUpForm.parentNode.removeChild(SignUpForm);
            document.getElementById('PageContent').style.backgroundColor = "rgba(0,0,0,0)";
            };
        var i;
        for (i=0; i<closeBtnX.length; i++){
            closeBtnX[i].addEventListener("click", closeForm);
        };
    };

    RegForm.addEventListener("click", LetsSignUp);

}
