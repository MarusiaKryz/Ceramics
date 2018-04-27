function sideMenu(){
var content = document.getElementById("PageContent");
content.parentNode.removeChild(content);

var rightSideMenu = document.createElement("rightSM");
var sideMenuItems = document.createTextNode("Головна<br>Придбати<br>Оптовим клієнтам<br>Доставка і оплата<br>Контакти<br>Зареєструватися/Увійти");
rightSideMenu.appendChild(sideMenuItems);
var elem = document.getElementById("SideMenuContent");
elem.appendChild(rightSideMenu);
}