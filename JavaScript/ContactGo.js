function ContactGo() {
    var contact;
    contact = document.getElementById('Contact');

    var goToContacts = function() {
        window.scrollBy(0, innerHeight);
    };

    contact.addEventListener("click", goToContacts);
}
