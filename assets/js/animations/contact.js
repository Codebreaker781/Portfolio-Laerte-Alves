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

    .from(".contact__info", {

        x: -60,

        duration: .8,

        ease: "power3.out"

    })

    .from(cards, {

        y: 30,

        stagger: .15,

        duration: .6,

        ease: "power2.out"

    }, "-=0.4")

    .from(".contact__form", {

        x: 60,

        duration: .8,

        ease: "power3.out"

    }, "-=0.5");

}