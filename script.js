let mmDesktop = gsap.matchMedia();

mmDesktop.add(
  {
    isDesktop: "(min-width: 769px)",
    isMobile: "(max-width: 769px)",
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
      );

    let parallaxTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".round-wrapper-layout-2",
        start: "center bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    parallaxTl1
      .fromTo(
        [".rotate-layout-1", ".title-layout-1"],
        {
          transform: "translateY(0)",
        },
        {
          transform: "translateY(60%)",
        },
        "seq-1"
      )
      .fromTo(
        ".rotate-layout-1",
        {
          rotate: -15,
          opacity: 0.1,
          scale: 0.75,
        },
        {
          rotate: -25,
          opacity: 0,
        },
        "seq-1"
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

    let revealTl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-layout-4",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    revealTl4
      .fromTo(
        ".symbol-layout-4",
        {
          rotate: 0,
        },
        {
          rotate: 360,
        }
      )
      .fromTo(
        ".symbol-layout-4",
        {
          transform: "translate(0)",
          rotate: 0,
        },
        {
          transform: "translateX(calc(50vw - 100%))",
          rotate: 360,
        }
      );

    const container4 = gsap.utils.toArray(".container-layout-4");

    container4.forEach((container) => {
      let randomTl4 = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      randomTl4
        .fromTo(
          container,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: isDesktop ? 0.25 : 0,
          },
          "seq-1"
        )
        .fromTo(
          container,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            delay: isDesktop ? 0.25 : 0,
          },
          "seq-2"
        );
    });

    const textDefault5 = new SplitType(".row-layout-5 span:nth-child(1)", {
      types: "words, chars",
    });

    const textAbove5 = new SplitType(".row-layout-5 span:nth-child(2)", {
      types: "words, chars",
    });

    const revealChars5 = textAbove5.chars;

    let revealTl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-layout-5",
        start: "top 75%",
        end: "top top",
        scrub: 1,
      },
    });

    revealTl5
      .fromTo(
        ".row-layout-5:nth-child(1) span:nth-child(2)",
        {
          width: isDesktop && 0,
          transform: "translateX(15px)",
        },
        {
          width: isDesktop && "100%",
          transform: "translateX(0)",
          delay: 0.25,
        },
        "seq-1"
      )
      .fromTo(
        ".row-layout-5:nth-child(2) span:nth-child(2)",
        {
          width: isDesktop && 0,
          transform: "translateX(15px)",
        },
        {
          width: isDesktop && "100%",
          transform: "translateX(0)",
          delay: 0.5,
        },
        "seq-1"
      )
      .fromTo(
        revealChars5,
        {
          opacity: !isDesktop && 0,
        },
        {
          opacity: !isDesktop && 1,
          stagger: 0.05,
        },
        "seq-1"
      );

    let roundTl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".round-layout-6",
        start: "bottom 75%",
        end: "bottom top",
        scrub: 1,
      },
    });

    roundTl6.fromTo(
      ".round-layout-6",
      {
        borderRadius: "0 0 50% 50%",
      },
      {
        borderRadius: 0,
      }
    );

    const row6 = gsap.utils.toArray(".row-layout-6 h1:nth-child(2)");

    row6.forEach((row) => {
      let revealT6 = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      });

      const textDefault6 = new SplitType(".row-layout-6 h1:nth-child(1)", {
        types: "words, chars",
      });

      const textMove6 = new SplitType(".row-layout-6 h1:nth-child(2)", {
        types: "words, chars",
      });

      const charMove6 = textMove6.chars;

      revealT6
        .fromTo(
          row,
          {
            width: isDesktop && 0,
          },
          {
            width: isDesktop && "100%",
            delay: 2,
          },
          "seq-1"
        )
        .fromTo(
          charMove6,
          {
            opacity: !isDesktop && 0,
          },
          {
            opacity: !isDesktop && 1,
            stagger: 0.1,
            delay: 1,
          },
          "seq-1"
        );
    });

    return () => {
      window.addEventListener("resize", () => {
        scrollTrigger.refresh();
      });
    };
  }
);
