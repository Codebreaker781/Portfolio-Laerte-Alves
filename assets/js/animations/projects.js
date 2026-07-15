/* ==========================================================
   PROJECTS
========================================================== */

/* ==========================================================
   INIT
========================================================== */

function initProjects() {

    revealProjects();

    projectHover();

}


/* ==========================================================
   REVEAL CARDS
========================================================== */

function revealProjects() {

    const section = document.querySelector(".projects");

    const cards = document.querySelectorAll(".project-card");


    if (!section || !cards.length) return;


    gsap.from(cards, {

        y: 60,

        duration: .9,

        stagger: .18,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 70%",

            once: true

        }

    });

}


/* ==========================================================
   CARD HOVER
========================================================== */

function projectHover() {

    const cards = document.querySelectorAll(".project-card");

    if (!cards.length) return;


    cards.forEach(card => {


        card.addEventListener("mouseenter", () => {


            gsap.to(card, {

                rotateX: 2,

                rotateY: -2,

                duration: .3,

                ease: "power2.out"

            });


        });


        card.addEventListener("mouseleave", () => {


            gsap.to(card, {

                rotateX: 0,

                rotateY: 0,

                duration: .4,

                ease: "power2.out"

            });


        });


    });

}