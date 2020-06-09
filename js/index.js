const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px 300px 0px",
};

const appearonscroll = new IntersectionObserver(function (
  entries,
  appearonscroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearonscroll.unobserve(entry.target);
    }

    const appearOptions = {};
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});



