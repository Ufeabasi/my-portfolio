gsap.registerPlugin(ScrollTrigger);

// 1. Initialize Lenis Smooth Scroll Engine
const lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5
});

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 2. High-End Link Navigation Routing Anchors
document.querySelectorAll('nav a, .position-cta a, .nav-cta a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                lenis.scrollTo(targetElement, {
                    offset: 0,
                    duration: 1.5,
                    ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Premium expo ease
                });
            }
        }
    });
});

// 3. Hero Entrance Timeline Engine
const heroTl = gsap.timeline();

heroTl.from(".reveal-text", {
    yPercent: 100,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.out"
})
.from(".hero-img-ctn-wrapper", {
    clipPath: "inset(0% 100% 0% 0%)",
    duration: 1.4,
    ease: "power3.inOut"
}, "-=1.0")
.from(".hero-line", {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1,
    ease: "power2.inOut"
}, "-=0.6")
.from(".fade-in-init", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.4")
.from(".hero-bottom .name h3", {
    yPercent: 100,
    stagger: 0.04,
    duration: 0.8,
    ease: "back.out(1.7)"
}, "-=0.6");

// 4. Kinetic Typography Scroll Splits (Intro Section)
document.querySelectorAll(".scroll-split").forEach((text) => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: "top 90%",
            end: "top 50%",
            scrub: 1
        },
        y: 60,
        opacity: 0.1,
        duration: 1,
        ease: "power2.out"
    });
});

// 5. About Me Reveal Sequences
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

aboutTl.from(".trigger-headline", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
.from(".reveal-paragraph", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
}, "-=0.7")
.from(".metric-box", {
    scale: 0.9,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.out(1.2)"
}, "-=0.5");

// 6. Selected Works Row Animations
document.querySelectorAll(".project-row").forEach((row) => {
    const imgWrapper = row.querySelector(".work-img-wrapper");
    const img = row.querySelector(".work-img");

    gsap.from(row, {
        scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });

    // Elegant clip-path opening image reveal on row mouse interactions
    row.addEventListener("mouseenter", () => {
        gsap.to(imgWrapper, { clipPath: "inset(0% 0% 0% 0%)", scale: 1.02, duration: 0.5, ease: "power2.out" });
        gsap.to(img, { scale: 1.1, duration: 0.8, ease: "power2.out" });
    });

    row.addEventListener("mouseleave", () => {
        gsap.to(imgWrapper, { clipPath: "inset(10% 10% 10% 10%)", scale: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(img, { scale: 1, duration: 0.8, ease: "power2.out" });
    });
});

// 7. Tech Bento Modules & Progress Bar Fill Map Sequences
gsap.from(".bento-card", {
    scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    y: 60,
    opacity: 0,
    stagger: 0.12,
    duration: 1,
    ease: "power4.out",
    onComplete: () => {
        // Safe context loop initializing dynamic progress data fills
        document.querySelectorAll(".progress-bar .fill").forEach(fill => {
            const targetWidth = fill.getAttribute("data-width");
            gsap.to(fill, { width: targetWidth, duration: 1.5, ease: "power3.inOut" });
        });
    }
});

// 8. Creative Footer Message Reveal
gsap.from(".footer-reveal", {
    scrollTrigger: {
        trigger: ".contact-footer",
        start: "top 80%"
    },
    yPercent: 40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

// 9. Premium Magnetic CTA Physics Matrix Call
const magnetButton = document.querySelector(".submit-btnMagnet");
if (magnetButton) {
    magnetButton.addEventListener("mousemove", (e) => {
        const bound = magnetButton.getBoundingClientRect();
        const x = e.clientX - bound.left - bound.width / 2;
        const y = e.clientY - bound.top - bound.height / 2;
        
        gsap.to(magnetButton, {
            x: x * 0.35,
            y: y * 0.35,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    magnetButton.addEventListener("mouseleave", () => {
        gsap.to(magnetButton, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });
}