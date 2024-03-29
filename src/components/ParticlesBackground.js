import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = ({ className }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className={`fixed w-full h-full top-0 left-0 z-0 ${className}`}
      init={particlesInit}
      loaded={particlesLoaded}

      options={{
        fullScreen: false,
        background: {
          image: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
        },
        particles: {
          number: {
            value: window.innerWidth < 480 ? 5 : 10,
            density: { enable: true, value_area: 600 }
          },
          color: { value: "#ffffff" },
          shape: {
            type: ["circle", "square", "polygon", "star"],
            options: {
              polygon: { nb_sides: 3 },
              star: { nb_sides: 5, sides: 2.0 }
            },
            stroke: {
              width: 0,
              color: "#000000"
            },
          },
          opacity: {
            value: 0.25,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 50,
            random: true,
            anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 800, line_linked: { opacity: 1 } },
            bubble: {
              distance: 790,
              size: 79,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;

