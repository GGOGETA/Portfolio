gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
    scrollFromAnywhere: true,
    multiplier: 0.5,
    getDirection: true,
    reloadOnContextChange: true,
    touchMultiplier: 3,
    smoothMobile: 0,
    smartphone: {
    smooth: !0,
    breakpoint: 766,
    },
    tablet: {
    smooth: !0,
    breakpoint: 1010,
    },
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
    return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
    };
    },
    });
    

// -----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

    gsap.from("#hi", {
        y: 30,
        opacity:0,
        duration:2.5,
        delay:0.5
    });

    gsap.from("#intro", {
    x: -50,
    opacity: 0,
    delay: 0.5,
    duration: 1.5
    });

    gsap.from(".nav", {
    x: 50,
    opacity: 0,
    delay: 0.5,
    duration: 1.5
    });

    gsap.from(".rowcf, .project", {
    scale: 0,
    delay: 0.5,
    duration: 1.5
    });

    gsap.from(".special", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
    trigger: ".special",
    start: "top 75%",
    end: "top 20%",
    scroller: "[data-scroll-container]",
    markers: false,
    scrub: true,
    }
    });

    gsap.to(".special", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger:0.8,
    scrollTrigger: {
    trigger: ".special",
    start: "top 10%",
    end: "bottom",
    scroller: "[data-scroll-container]",
    markers: false,
    scrub: true,
    }
    });

    gsap.from(".checkpoint", {
    x: 200,
    opacity: 0,
    delay:0.4,
    duration: 3,
    stagger:1,
    scrollTrigger: {
    trigger: ".checkpoint",
    start: "top 75%",
    end: "top 20%",
    scroller: "[data-scroll-container]",
    markers: false
    }
    });

    gsap.from("[centre]", {
    opacity:0,
    duration: 2,
    scrollTrigger: {
    trigger: "[centre]",
    start: "top 80%",
    end: "top 10%",
    scroller: "[data-scroll-container]",
    markers: false,
    }
    });

    gsap.from("[top-left]", {
    x: -100,
    y: -100,
    opacity:0,
    duration: 1,
    scrollTrigger: {
    trigger: "[top-left]",
    start: "top 80%",
    end: "top 10%",
    scroller: "[data-scroll-container]",
    markers: false,
    }
    });

    gsap.from("[top-right]", {
    x: 100,
    y: -100,
    opacity:0,
    duration: 1,
    scrollTrigger: {
    trigger: "[top-right]",
    start: "top 80%",
    end: "top 10%",
    scroller: "[data-scroll-container]",
    markers: false,
    }
    });


    gsap.from("[left]", {
    x: -100,
    opacity:0,
    duration: 1,
    scrollTrigger: {
    trigger: "[left]",
    start: "top 80%",
    end: "top 10%",
    scroller: "[data-scroll-container]",
    markers: false,
    }
    });

    gsap.from("[right]", {
    x: 100,
    opacity:0,
    duration: 1,
    scrollTrigger: {
    trigger: "[right]",
    start: "top 80%",
    end: "top 20%",
    scroller: "[data-scroll-container]",
    markers: false,
    }
    });

    gsap.from("[bottom-left]", {
    x: -100,
    y: 100,
    opacity:0,
    duration: 1,
    scrollTrigger: {
    trigger: "[bottom-left]",
    start: "top 85%",
    end: "top 50%",
    scroller: "[data-scroll-container]",
    markers: false,
    }
    });

    gsap.from("[bottom-right]", {
    x: 100,
    y: 100,
    opacity:0,
    duration: 1,
    scrollTrigger: {
    trigger: "[bottom-right]",
    start: "top 85%",
    end: "top 50%",
    scroller: "[data-scroll-container]",
    markers: false,
    }
    });


    gsap.from(".form", {
    scale: 0.8,
    opacity:0,
    duration: 2,
    scrollTrigger: {
    trigger: ".form",
    start: "top 85%",
    end: "top 20%",
    scroller: "[data-scroll-container]",
    markers: false,
    }
    });

    gsap.from("[hire-me]", {
        scale: 2,
        duration: 2,
        ease: "power1.in"
        });    

    
        

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();


    