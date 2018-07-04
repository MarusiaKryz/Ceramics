var Contact = function() {
    var contact;
    contact = document.getElementById('Contact');

    var goToContacts = function() {
        window.scrollTo(0, document.getElementsByTagName("footer"))
    };

    contact.addEventListener("click", goToContacts);
}