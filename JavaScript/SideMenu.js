function sideMenu() {
    var content = document.getElementById('PageContent');
    var contentParent = content.parentNode;
        contentParent.removeChild(content);

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

    var closeIcon;
    closeIcon = '<i class="fa fa-close" id="XBtn"></i>';


    var addLang;
    addLang = '<p><span>UK</span> <span> | </span> <span>EN</span></p>';

    document.getElementById("SideMenu").innerHTML = sideMenuCreate + closeIcon + addLang;


    var closeXBtn = document.getElementById("XBtn");

    var closeSideMenu = function () {
        document.getElementById("SideMenu").style.display = "none";
        contentParent.appendChild(content);
    };
   closeXBtn.addEventListener("click", closeSideMenu);
}

