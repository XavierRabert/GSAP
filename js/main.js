let logo = document.querySelector(".logo");

gsap.from(logo, {
  color: "red",
  // backgroundColor: "yellow",
  x: -100,
  // rotate: 360,
  scale: 1,
  duration: 5,
  ease: "elastic.out",
});

gsap.from(".menu-item", {
  y: -100,
  ease: "power3.out",
  duration: 1,
  stagger: 0.05,
});

const text = SplitType.create(".hero-title", { types: "words, chars" });

text.chars.map((char, index) => {
  let charOriginalColor = window.getComputedStyle(char).color;
  let charsTimeLine = gsap.timeline();

  charsTimeLine.from(char, {
    y: gsap.utils.random(-150, 150),
    x: gsap.utils.random(-300, 300),
    rotate: gsap.utils.random(-360, 360),
    scale: gsap.utils.random(0, 2),
    opacity: 0,
    duration: 0.75,
    delay: index * 0.01,
    ease: "back.out",
  });

  charsTimeLine.from(
    char,
    {
      color: getRandomColor(),
      duration: 1,
    },
    "-=.25"
  );

  char.addEventListener("mouseenter", charsHover);

  function charsHover() {
    gsap
      .timeline()
      .to(char, {
        y: gsap.utils.random(-50, 50),
        x: gsap.utils.random(-50, 50),
        rotate: gsap.utils.random(-90, 90),
        scale: gsap.utils.random(0.5, 1.5),
        color: getRandomColor(),
        duration: 0.5,
        ease: "back.out",
        onComplete: () => char.removeEventListener("mouseenter", charsHover),
      })
      .to(char, {
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        color: charOriginalColor,
        delay: 0.5,
        onComplete: () =>
          setTimeout(() => {
            char.addEventListener("mouseenter", charsHover);
          }, 100),
      });
  }
});

function getRandomColor() {
  const getColor = () => gsap.utils.random(0, 255);

  return `rgb(${getColor()},${getColor()},${getColor()})`;
}
