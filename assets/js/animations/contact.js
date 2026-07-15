/* ==========================================================
   CONTACT
========================================================== */


/* ==========================================================
   INIT
========================================================== */

function initContact() {

    revealContact();

}


/* ==========================================================
   REVEAL
========================================================== */

function revealContact() {

    const section = document.querySelector(".contact");

    const cards = document.querySelectorAll(".contact-card");

    if (!section || !cards.length) return;

    const isMobile = window.innerWidth <= 768;

    const timeline = gsap.timeline({

        scrollTrigger: {

            trigger: section,

            start: "top 70%",

            once: true

        }

    });


    timeline

    .from(".contact .section-header", {

        y: 40,

        duration: .8,

        ease: "power3.out"

    })

    .from(
        ".contact__info",
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
            }
    )

    .from(cards, {

        y: 30,

        stagger: .15,

        duration: .6,

        ease: "power2.out"

    }, "-=0.4")

    .fromTo(
        ".contact__form",
        isMobile
            ? {
                y: 30,
                scale: .98
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
        },
        "-=0.5"
    );

    window.addEventListener("resize", () => {

        if (window.innerWidth <= 768) {

            gsap.set(".contact__info, .contact__form", {

                clearProps: "transform"

            });

        }

    });

}