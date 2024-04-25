let mmDesktop = gsap.matchMedia();

mmDesktop.add(
  {
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 768px)",
  },
  (context) => {
    let { isDesktop, isMobile } = context.conditions;

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-layout-1",
        start: "top top",
        end: "500% top",
        scrub: 1,
        pin: true,
      },
    });

    tl1
      .fromTo(
        ".rotate-layout-1",
        {
          opacity: 0.5,
        },
        {
          opacity: 1,
        },
        "seq-1"
      )
      .fromTo(
        ".container-layout-1._1",
        {
          transform: "translateY(0)",
        },
        {
          transform: isDesktop ? "translateY(-50%)" : "translateY(-10%)",
        },
        "seq-1"
      )
      .fromTo(
        ".container-layout-1._2",
        {
          transform: "translateY(0)",
        },
        {
          transform: isDesktop ? "translateY(-25%)" : "translateY(-15%)",
        },
        "seq-1"
      )
      .fromTo(
        ".container-layout-1._3",
        {
          transform: "translateY(0)",
        },
        {
          transform: isDesktop ? "translateY(-40%)" : "translateY(-15%)",
        },
        "seq-1"
      )
      .fromTo(
        ".rotate-layout-1",
        {
          rotate: 0,
          scale: 1,
        },
        {
          rotate: -15,
          scale: 0.75,
          opacity: 0.1,
        },
        "seq-2"
      )
      .to(
        ".container-layout-1._1",
        {
          transform: isDesktop ? "translateY(-75%)" : "translateY(-20%)",
        },
        "seq-2"
      )
      .to(
        ".container-layout-1._2",
        {
          transform: isDesktop ? "translateY(-50%)" : "translateY(-25%)",
        },
        "seq-2"
      )
      .to(
        ".container-layout-1._3",
        {
          transform: isDesktop ? "translateY(-60%)" : "translateY(-30%)",
        },
        "seq-2"
      )
      .fromTo(
        ".progress-layout-1",
        {
          width: 0,
        },
        {
          width: "100%",
        },
        "seq-2"
      )
      .fromTo(
        ".title-layout-1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.1,
        },
        "seq-2"
      );

    const layout2Texts = new SplitType(".row-layout-2 h1", {
      types: "words, chars",
    });

    const layout2Text = new SplitType(".row-layout-2 h1:nth-child(2)", {
      types: "words, chars",
    });

    const revealChars = layout2Text.chars;

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".layout-2",
        start: "top 75%",
        end: "bottom top",
        scrub: 1,
      },
    });

    let textTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-layout-2",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1,
      },
    });

    tl2.to(".round-layout-2", {
      height: 0,
      top: "75%",
    });
    textTl2.fromTo(
      revealChars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.05,
      }
    );

    return () => {
      window.addEventListener("resize", () => {
        scrollTrigger.refresh();
      });
    };
  }
);
