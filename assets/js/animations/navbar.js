/* ==========================================================
   NAVBAR.JS
   Projeto: Portfólio Laerte Alves
========================================================== */

/* ==========================================================
   Inicialização
========================================================== */

function initNavbar() {

    navbarScroll();

    navbarActiveLinks();

    smoothScroll();

    mobileMenu();

}

/* ==========================================================
   Navbar Scroll
========================================================== */

function navbarScroll() {

    const navbar = document.querySelector(".header");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("header--scrolled");

        } else {

            navbar.classList.remove("header--scrolled");

        }

    });

}

/* ==========================================================
   Scroll Suave
========================================================== */

function smoothScroll() {

    const navbar = document.querySelector(".header");

    const links = document.querySelectorAll(
        ".navbar__link, .navbar__cta, .btn[href^='#']"
    );

    if (!navbar || !links.length) return;

    links.forEach(link => {

        link.addEventListener("click", event => {

            const id = link.getAttribute("href");

            if (id === "#") return;

            const section = document.querySelector(id);

            if (!section) return;

            event.preventDefault();

            const offset = navbar.offsetHeight;

            window.scrollTo({

                top: section.offsetTop - offset,

                behavior: "smooth"

            });

        });

    });

}

/* ==========================================================
   Link Ativo
========================================================== */

function navbarActiveLinks() {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar__link");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================================
   MOBILE MENU
========================================================== */

function mobileMenu() {

    const toggle = document.querySelector(".navbar__toggle");

    const menu = document.querySelector(".navbar__menu");

    const links = document.querySelectorAll(".navbar__link");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {

        const isOpen = menu.classList.toggle("active");

        toggle.classList.toggle("active");

        document.body.classList.toggle("menu-open");

        toggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

    links.forEach(link => {

        link.addEventListener("click", () => {

            toggle.classList.remove("active");

            menu.classList.remove("active");

            document.body.classList.remove("menu-open");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 992) {

            toggle.classList.remove("active");

            menu.classList.remove("active");

            document.body.classList.remove("menu-open");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}