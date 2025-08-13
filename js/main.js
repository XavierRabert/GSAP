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

  charsTimeLine.from(char, {
    color: `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`,
  });
});

function getRandomColor() {
  return gsap.utils.random(0, 255);
}
