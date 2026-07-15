/* ==========================================================
   HERO
========================================================== */

/* ==========================================================
   INIT
========================================================== */

function initHero() {

    heroReveal();

    heroParallax();

}

/* ==========================================================
   HERO REVEAL
========================================================== */

function heroReveal() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const isMobile = window.innerWidth <= 768;

    const timeline = gsap.timeline({

        defaults: {

            ease: "power3.out"

        }

    });

    timeline

    .from(".hero__tag", {

        y: -30,

        duration: .6

    })

    .from(".hero__title span", {

        y: 60,

        stagger: .15,

        duration: .8

    }, "-=.2")

    .from(".hero__subtitle", {

        y: 30,

        duration: .6

    }, "-=.4")

    .from(".hero__buttons .btn", {

        y: 20,

        stagger: .15,

        duration: .5

    }, "-=.3")

    .fromTo(
        ".player-card",
        isMobile
            ? {
                y: 30,
                scale: .95
            }
            : {
                scale: .85,
                rotate: -8
            },
        {
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "power3.out",
            clearProps: "transform"
        },
        "-=1"
    )

    .fromTo(
        ".hud-panel",
        isMobile
            ? {
                y: 30
            }
            : {
                x: 80
            },
        {
            x: 0,
            y: 0,
            duration: .8,
            ease: "power3.out",
            clearProps: "transform"
        },
        "-=.6"
    );

}

/* ==========================================================
   HERO PARALLAX
========================================================== */

function heroParallax() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    if (window.innerWidth <= 992) return;

    const glow = document.querySelector(".hero__glow");

    const card = document.querySelector(".player-card");

    const hud = document.querySelector(".hud-panel");

    const orbs = document.querySelectorAll(".hero__orb");

    if (!glow && !card && !hud && !orbs.length) return;

    hero.addEventListener("mousemove", event => {

        const rect = hero.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - .5;

        const y = (event.clientY - rect.top) / rect.height - .5;

        if (glow) {

            gsap.to(glow, {

                x: x * 40,

                y: y * 40,

                duration: .5,

                ease: "power2.out"

            });

        }

        if (card) {

            gsap.to(card, {

                rotateY: x * 10,

                rotateX: -y * 10,

                x: x * 8,

                y: y * 8,

                duration: .35,

                ease: "power2.out"

            });

        }

        if (hud) {

            gsap.to(hud, {

                x: x * 15,

                y: y * 15,

                duration: .35,

                ease: "power2.out"

            });

        }

        orbs.forEach((orb, index) => {

            const factor = (index + 1) * 12;

            orb.style.transform = `
                translate(${x * factor}px, ${y * factor}px)
            `;

        });

    });

    hero.addEventListener("mouseleave", () => {

        if (glow) {

            gsap.to(glow, {

                x: 0,

                y: 0,

                duration: .6

            });

        }

        if (card) {

            gsap.to(card, {

                x: 0,

                y: 0,

                rotateX: 0,

                rotateY: 0,

                duration: .5,

                ease: "power3.out"

            });

        }

        if (hud) {

            gsap.to(hud, {

                x: 0,

                y: 0,

                duration: .5

            });

        }

        orbs.forEach(orb => {

            orb.style.transform = "";

        });

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth <= 992) {

            gsap.set(".player-card, .hud-panel", {

                clearProps: "transform"

            });

        }

    });

}