let circle = document.querySelector(".circle");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        circle.classList.add("active");
    } else {
        circle.classList.remove("active");

    }
})

let button = document.querySelector(".btn");


button.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"

    })
});