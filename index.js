const navBar = document.querySelector(".mainNav");
const infoOneText = document.querySelector(".info-one");
const infoOneImage =  document.querySelector(".one-image");

window.addEventListener("scroll", (e) => {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 450) {
        navBar.setAttribute("id", "nav-bar-white");

        if (scrollPosition > 500) {
            infoOneImage.setAttribute("id", "image-info-appear");
            infoOneText.setAttribute("id", "text-info-appear");
        }
        else {
            infoOneImage.removeAttribute("id", "image-info-appear");
            infoOneText.removeAttribute("id", "text-info-appear");
        }
    }
    else {
        navBar.removeAttribute("id", "nav-bar-white");
    }

})