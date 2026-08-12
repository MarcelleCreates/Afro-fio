// =========================================
// AFRO FIO
// JAVASCRIPT
// =========================================


// =========================================
// MENU MOBILE
// =========================================

const menuBtn =
    document.getElementById("menu-btn");

const navbar =
    document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");


    const icon =
        menuBtn.querySelector("i");


    if (
        navbar.classList.contains("active")
    ) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



// =========================================
// FECHAR MENU
// =========================================

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");


        const icon =
            menuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



// =========================================
// ANIMAÇÃO AO ROLAR
// =========================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (
            elementTop <
            windowHeight - 100
        ) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



// =========================================
// ANO AUTOMÁTICO
// =========================================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}



// =========================================
// EFEITO DO HEADER
// =========================================

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 80) {

            header.style.boxShadow =
                "0 8px 30px rgba(43, 22, 13, 0.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);
