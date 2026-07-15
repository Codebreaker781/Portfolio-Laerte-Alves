/* ==========================================================
   APPLICATION
========================================================== */

document.addEventListener("DOMContentLoaded", initApp);

window.addEventListener("load", () => {

    if (typeof initLoader === "function") {

        initLoader();

    }

});


/* ==========================================================
   INIT
========================================================== */

function initApp() {

    initGSAP();

    initCore();

    initAnimations();

    initEffects();

    initAudio();

    initScrollToTop();

    initCurrentYear();

    console.log("🚀 Portfolio iniciado.");

}


/* ==========================================================
   GSAP
========================================================== */

function initGSAP() {

    if (typeof gsap === "undefined") {

        console.warn("GSAP não encontrado.");

        return false;

    }

    if (typeof ScrollTrigger !== "undefined") {

        gsap.registerPlugin(ScrollTrigger);

    }

    return true;

}


/* ==========================================================
   CORE
========================================================== */

function initCore() {

    if (typeof initCursor === "function") {

        initCursor();

    }

    if (typeof initScroll === "function") {

        initScroll();

    }

}


/* ==========================================================
   ANIMATIONS
========================================================== */

function initAnimations() {

    if (typeof initNavbar === "function") {

        initNavbar();

    }

    if (typeof initHero === "function") {

        initHero();

    }

    if (typeof initAbout === "function") {

        initAbout();

    }

    if (typeof initSkills === "function") {

        initSkills();

    }

    if (typeof initProjects === "function") {

        initProjects();

    }

    if (typeof initContact === "function") {

        initContact();

    }

}


/* ==========================================================
   EFFECTS
========================================================== */

function initEffects() {

    if (typeof initParticles === "function") {

        initParticles();

    }

    if (typeof initTyping === "function") {

        initTyping();

    }

    if (typeof initScanner === "function") {

        initScanner();

    }

    if (typeof initGlitch === "function") {

        initGlitch();

    }

}

/* ==========================================================
   Botão voltar ao topo
========================================================== */

function initScrollToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   Ano automático
========================================================== */

function initCurrentYear() {

    const year = document.querySelector(".current-year");

    if (!year) return;

    year.textContent = new Date().getFullYear();

}