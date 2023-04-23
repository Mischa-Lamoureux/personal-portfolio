import { useState, useEffect } from "react";

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);
  console.log("IN HERE");

  useEffect(() => {
    console.log("IN HERE2");
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("IN HERE3");
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};
