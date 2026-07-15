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

    .from(".about__text", {

        x: -60,

        duration: .8,

        ease: "power3.out"

    }, "-=0.4")

    .fromTo(
        ".about__cards .hud-panel",
        {
            x:60
        },
        {
            x:0,
            duration:.8,
            ease:"power3.out",
            clearProps:"transform"
        }
    )

}