/*Validation
function validField() {
    var regEl, i;
    regEl = document.getElementsByClassName("RegForm");
    var validMsg = "";
    for (i = 0; i < regEl.length; i++) {
        if (!regEl[i].checkValidity()) {
            validMsg = validMsg + "<br>" + regEl[i].validationMessage;
        };
    };
    //validMsg.style.color = "red";
    //validMsg.style.fontsize = 1em;
    document.getElementById("MessageValidation").innerHTML = validMsg ;
    document.getElementById("MessageValidation").style.color = "red";

};


/*function submitRegForm()
{
    document.getElementById("FormBtnS").submit();
    document.getElementById("MessageValidation").innerHTML = "Вітаємо ${Company}! Ви успішно зареєструвалися";
}*/
function validField() {
    var regEl, i;
    regEl = document.getElementsByClassName("RegForm");
    var validMsg = "";
    var fieldName = "";
    for (i = 0; i < regEl.length; i++) {
        if (!regEl[i].checkValidity()) {
            fieldName = regEl[i].getAttribute("title");
            validMsg = regEl[i].validationMessage;

        };
        var MsgV = document.getElementById("MessageValidation");
        MsgV.innerHTML =  fieldName[i] + '.' +validMsg[i] ;
        MsgV.style.color = "red";
    };

};