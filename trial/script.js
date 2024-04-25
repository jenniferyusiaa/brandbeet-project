const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-1",
    start: "top top",
    end: "800%  50%",
    pin: true,
    scrub: 1,
  },
});

tl.to(
  ".rotate-div",
  {
    rotate: -15,
    scale: 0.75,
    x: "5%",
  },
  "a"
)
  .to(
    "#row-div-1",
    {
      marginTop: "-30%",
    },
    "a"
  )
  .to(
    "#row-div-2",
    {
      marginTop: "-40%",
    },
    "a"
  )
  .to(
    "#row-div-3",
    {
      marginTop: "-50%",
    },
    "a"
  )
  .to(
    "#row-div-4",
    {
      marginTop: "-25%",
    },
    "a"
  )
  .to(
    "#row-div-5",
    {
      marginTop: "-8%",
    },
    "a"
  )
  .to(
    ".overlay-div",
    {
      opacity: 1,
      delay: 0.25,
    },
    "a"
  )
  .to(
    ".scrolling",
    {
      width: "100%",
      delay: 0.25,
    },
    "a"
  );

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "top 75%",
    end: "center  center",
    scrub: 1,
  },
});

tl2.to(".rounded-div-wrapper", {
  height: 0,
  marginTop: 0,
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: "25% center",
    end: "bottom center",
    scrub: 1,
  },
});

tl3
  .to(
    ".text-area-hover h1:nth-child(1)",
    {
      width: "100%",
    },
    "a"
  )
  .to(
    ".text-area-hover h1:nth-child(2)",
    {
      width: "100%",
      delay: 0.1,
    },
    "a"
  );

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-4",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    // pin: true,
  },
});

// tl4
//   .to(
//     ".content-one",
//     {
//       marginTop: "-25%",
//       opacity: 1,
//     },
//     "sct-1"
//   )
//   .to(
//     ".content-one",
//     {
//       marginTop: "-100%",
//       opacity: 0,
//     },
//     "sct-2"
//   )
//   .to(
//     ".content-two",
//     {
//       opacity: 1,
//     },
//     "sct-2"
//   )
//   .to(
//     ".content-two",
//     {
//       marginTop: "-75%",
//       opacity: 0,
//     },
//     "sct-3"
//   )
//   .to(
//     ".content-three",
//     {
//       opacity: 1,
//     },
//     "sct-3"
//   )
//   .to(
//     ".content-three",
//     {
//       marginTop: "-75%",
//       opacity: 0,
//     },
//     "sct-4"
//   )
//   .to(
//     ".content-four",
//     {
//       opacity: 1,
//     },
//     "sct-4"
//   )
//   .to(
//     ".content-four",
//     {
//       marginTop: "-75%",
//       opacity: 0,
//     },
//     "sct-5"
//   )
//   .to(
//     ".content-five",
//     {
//       opacity: 1,
//     },
//     "sct-5"
//   )
//   .to(
//     ".content-five",
//     {
//       marginTop: "-75%",
//       opacity: 0,
//     },
//     "sct-6"
//   )
//   .to(
//     ".content-six",
//     {
//       opacity: 1,
//     },
//     "sct-6"
//   )
//   .to(
//     ".content-six",
//     {
//       marginTop: "-75%",
//       opacity: 0,
//     },
//     "sct-7"
//   )
//   .to(
//     ".circle-part-4",
//     {
//       marginLeft: "100%",
//       rotate: 360,
//     },
//     "sct-8"
//   );

const rowPart5 = document.querySelectorAll(".row-part-5 h1:nth-child(2)");

rowPart5.forEach((row) => {
  gsap.to(row, {
    scrollTrigger: {
      trigger: row,
      start: "top 75%",
      end: "top top",
      scrub: 1,
    },

    width: "100%",
  });
});

gsap.to(".curve-part-6", {
  scrollTrigger: {
    trigger: ".curve-part-6",
    start: "top 75%",
    end: "bottom -25%",
    scrub: 1,
  },

  height: 0,
});

const rowPart6 = document.querySelectorAll(".row-part-6 h1:nth-child(2)");

rowPart6.forEach((row) => {
  gsap.to(row, {
    scrollTrigger: {
      trigger: row,
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },

    width: "100%",
  });
});

const part7 = document.querySelector(".part-7");

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: part7,
    start: "top top",
    end: "750% center",
    pin: true,
    scrub: 1,
    markers: true,
  },
});

tl7
  .to(".button-part-7", {
    bottom: "10%",
  })
  .to(
    ".our-work-text-div",
    {
      height: "60vh",
    },
    "height"
  )
  .to(
    ".our-work-text",
    {
      height: "60vh",
    },
    "height"
  )
  .to(
    "#our",
    {
      left: 0,
    },
    "height"
  )
  .to(
    "#work",
    {
      right: 0,
    },
    "height"
  )
  .to(".scroll-image", {
    marginTop: "-450%",
  });
