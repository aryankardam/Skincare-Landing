import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapReveal = (targetRef, options = {}) => {
  useEffect(() => {
    const el = targetRef.current;
    if (el) {
      gsap.fromTo(el, {
        opacity: 0,
        y: 40,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
          ...options
        }
      });
    }
  }, [targetRef]);
};
