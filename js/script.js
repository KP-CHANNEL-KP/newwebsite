particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.8, random: true },
    size: { value: 2, random: true },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});
