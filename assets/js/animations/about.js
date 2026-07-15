/* ==========================================================
   ABOUT
========================================================== */

/* ==========================================================
   INIT
========================================================== */

function initAbout() {

    revealAbout();

}

/* ==========================================================
   REVEAL
========================================================== */

function revealAbout() {

    const section = document.querySelector(".about");

    if (!section) return;

    const isMobile = window.innerWidth <= 768;

    const timeline = gsap.timeline({

        scrollTrigger: {

            trigger: section,

            start: "top 70%",

            once: true

        }

    });

    timeline

    .from(".section-header", {

        y: 40,

        duration: .8,

        ease: "power3.out"

    })

    .from(
        ".about__text",
        isMobile
            ? {
                y: 30,
                duration: .8,
                ease: "power3.out"
            }
            : {
                x: -60,
                duration: .8,
                ease: "power3.out"
            },
        "-=0.4"
    )

    .fromTo(
        ".about__cards .hud-panel",
        isMobile
            ? {
                y: 30,
                scale: .97
            }
            : {
                x: 60
            },
        {
            x: 0,
            y: 0,
            scale: 1,
            duration: .8,
            ease: "power3.out",
            clearProps: "transform"
        }
    )

    window.addEventListener("resize", () => {

        if (window.innerWidth <= 768) {

            gsap.set(".about__text, .about__cards .hud-panel", {

                clearProps: "transform"

            });

        }

    });

}