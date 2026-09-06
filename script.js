// RUDRA SPORTS & FITNESS - WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {
    // Mobile navigation
    const menuButton = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-links");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("open");
            menuButton.classList.toggle("active", isOpen);
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });

        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
                menuButton.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Free trial form
    const trialForm = document.querySelector(".trial-form");
    if (trialForm) {
        trialForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = trialForm.querySelector('input[type="text"]').value;
            const phone = trialForm.querySelector('input[type="tel"]').value;
            const selects = trialForm.querySelectorAll("select");
            const fitnessGoal = selects[0] ? selects[0].value : "";
            const preferredTiming = selects[1] ? selects[1].value : "";
            const message = `Hello, I would like to book a FREE TRIAL at Rudra Sports & Fitness.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AFitness Goal: ${encodeURIComponent(fitnessGoal)}%0APreferred Timing: ${encodeURIComponent(preferredTiming)}`;
            window.open(`https://wa.me/919343251500?text=${message}`, "_blank");
            trialForm.reset();
        });
    }

    // Feedback form
    const feedbackForm = document.querySelector(".feedback-form");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = feedbackForm.querySelector('input[type="text"]').value;
            const rating = feedbackForm.querySelector("select").value;
            alert(`Thank you, ${name}! 😊\n\nYour rating: ${rating}\n\nThank you for sharing your feedback with Rudra Sports & Fitness.`);
            feedbackForm.reset();
        });
    }

    // Navbar shadow
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (navbar) navbar.style.boxShadow = window.scrollY > 50 ? "0 5px 20px rgba(0, 0, 0, 0.08)" : "none";
    });

    // Scroll reveal
    const revealElements = document.querySelectorAll(".feature-card, .service-card, .membership-card, .testimonial-card, .gallery-item, .sports-store-section");
    revealElements.forEach(function (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    const revealOnScroll = function () {
        revealElements.forEach(function (element) {
            if (element.getBoundingClientRect().top < window.innerHeight - 80) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Smooth scrolling with mobile-friendly header offset
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                event.preventDefault();
                const offset = navbar ? navbar.offsetHeight + 8 : 70;
                window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: "smooth" });
            }
        });
    });
});
