var tl = new TimelineMax();



tl
    .from(".logo", {
        duration: 3,
        y: "-100% ",
    })
    .from("li", {
        duration: 3,
        opacity: "0",
        stagger: 1,
        ease: "steps(3)",
    })
    .from("h1", {
        duration: 2,
        opacity: 0,
        x: "-100%",
        ease: "bounce.out",
    })
    .from("h3", {
        duration: 4,
        opacity: 0,

        ease: "bounce.out",
    })
    .from(".button", {
        duration: 4,
        opacity: 0,
        y: "500%",
        ease: "bounce.out",
    })
    .from(".right", {
        duration: 2,
        opacity: 0,
        // y: "500%",
        scale: .2,
        ease: "power.out",

    })