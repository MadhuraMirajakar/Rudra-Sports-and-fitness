// =========================================
// RUDRA SPORTS & FITNESS
// JAVASCRIPT
// =========================================


// =========================================
// FREE TRIAL FORM
// =========================================

const trialForm = document.querySelector(".trial-form");

trialForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get input values

    const name = trialForm.querySelector('input[type="text"]').value;

    const phone = trialForm.querySelector('input[type="tel"]').value;

    const selects = trialForm.querySelectorAll("select");

    const fitnessGoal = selects[0].value;

    const preferredTiming = selects[1].value;


    // WhatsApp message

    const message =
        `Hello, I would like to book a FREE TRIAL at Rudra Sports & Fitness.%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Fitness Goal: ${fitnessGoal}%0A` +
        `Preferred Timing: ${preferredTiming}`;


    // Gym WhatsApp number

    const whatsappNumber = "919343251500";


    // Open WhatsApp

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );


    // Reset form

    trialForm.reset();

});



// =========================================
// FEEDBACK FORM
// =========================================

const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = feedbackForm.querySelector('input[type="text"]').value;

    const rating = feedbackForm.querySelector("select").value;

    const feedback = feedbackForm.querySelector("textarea").value;


    // Success message

    alert(
        `Thank you, ${name}! 😊\n\n` +
        `Your rating: ${rating}\n\n` +
        `Thank you for sharing your feedback with Rudra Sports & Fitness.`
    );


    // Reset form

    feedbackForm.reset();

});



// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});



// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
    ".feature-card, .service-card, .pricing-card, .testimonial-card, .gallery-item"
);


const revealOnScroll = function () {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 80) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }

    });

};


// Initial style

revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});


// Listen for scroll

window.addEventListener(
    "scroll",
    revealOnScroll
);


// Run once when page loads

revealOnScroll();



// =========================================
// SMOOTH SCROLL
// =========================================

const navLinks = document.querySelectorAll(
    'a[href^="#"]'
);


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                window.scrollTo({

                    top:
                        target.offsetTop - 70,

                    behavior: "smooth"

                });

            }

        }

    );

});