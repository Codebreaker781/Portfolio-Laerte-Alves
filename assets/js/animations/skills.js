/* ==========================================================
   SKILLS
========================================================== */

/* ==========================================================
   INIT
========================================================== */

function initSkills() {

    revealSkills();

    animateSkillBars();

}

/* ==========================================================
   REVEAL CARDS
========================================================== */

function revealSkills() {

    const section = document.querySelector(".skills");

    if (!section) return;

    gsap.from(".skill-card", {

        y: 50,

        duration: .8,

        stagger: .15,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 70%",

            once: true

        }

    });

}

/* ==========================================================
   SKILL BARS
========================================================== */

function animateSkillBars() {

    const section = document.querySelector(".skills");

    const bars = document.querySelectorAll(".skill-card__level span");

    if (!section || !bars.length) return;

    bars.forEach(bar => {

        const finalWidth = bar.style.width;

        gsap.set(bar, {

            width: "0%"

        });

        gsap.to(bar, {

            width: finalWidth,

            duration: 1.4,

            ease: "power2.out",

            scrollTrigger: {

                trigger: section,

                start: "top 85%",

                once: true

            }

        });

    });

}