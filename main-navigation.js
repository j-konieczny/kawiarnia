(() => {
    const button = document.querySelector(".js-main-navigation__mobile-button");
    const menu = document.querySelector(".js-main-navigation__menu")

    const toggleClass = () => {
        menu.classList.toggle("main-navigation__menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();

// btn to top

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function(){
    // window.scrollTo(0, 0);


    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"

    });
});

