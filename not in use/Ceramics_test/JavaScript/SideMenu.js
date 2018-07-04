function sideMenu() {
    var content = document.getElementById('PageContent');
    content.parentNode.removeChild(content);

    var sideMenuCreate;
    var sideMenuItemNames, itemNamesLeng, i;
    sideMenuItemNames = ["Головна", "Придбати", "Оптовим клієнтам", "Доставка і оплата",
        "Контакти", "Зареєструватися/Увійти"];
    itemNamesLeng = sideMenuItemNames.length;
    sideMenuCreate = "<ul>";
    for (i = 0; i < itemNamesLeng; i++) {
        sideMenuCreate += "<li>" + sideMenuItemNames [i] + "</li>";
    }
    sideMenuCreate += "</ul>";

    var addCloseIcon;
    addCloseIcon = '<i class="fa fa-close"></i>'

    var addLang;
    addLang = '<p><span>UK</span> <span> | </span> <span>EN</span></p>';

    document.getElementById("SideMenu").innerHTML = sideMenuCreate + addCloseIcon + addLang;
}

