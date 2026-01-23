import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Using the dist version can sometimes be safer for SSR

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Export both the main gsap object and the plugin
export { gsap, ScrollTrigger };