const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__links");

burger.addEventListener("click", function () {

    if(!burger.classList.contains('open')) {
        burger.classList.add('open');
        headerNav.style.display = "block";
    } else {
        burger.classList.remove('open');
        headerNav.style.display = "none";
    }
});