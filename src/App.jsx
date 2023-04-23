import React, { useRef, useState, useEffect } from "react";
import { useIntersection } from "./useIntersection";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  // const ref = useRef();
  // const inViewport = useIntersection(ref, "0px");

  // if (inViewport) {
  //   console.log("in viewport:", ref.current);
  // } else console.log("NOT");

  // const [visibleComponent, setVisibleComponent] = useState(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const components = document.querySelectorAll(".component");
  //     console.log(components);
  //     components.forEach((component) => {
  //       const componentTop = component.getBoundingClientRect().top;
  //       const componentBottom = component.getBoundingClientRect().bottom;
  //       if (componentTop <= window.innerHeight && componentBottom >= 0) {
  //         setVisibleComponent(component.id);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   console.log("USE EFFECT", visibleComponent);
  // }, [visibleComponent]);

  // const [visibleComponent, setVisibleComponent] = useState(null);
  // const componentRefs = useRef([]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(componentRefs.current);
  //     componentRefs.current.forEach((componentRef) => {
  //       const component = componentRef.current;
  //       console.log(component);
  //       const componentTop = component.getBoundingClientRect().top;
  //       const componentBottom = component.getBoundingClientRect().bottom;
  //       if (componentTop <= window.innerHeight && componentBottom >= 0) {
  //         setVisibleComponent(component.id);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const registerComponentRef = (ref, id) => {
  //   componentRefs.current[id] = ref;
  // };

  // useEffect(() => {
  //   console.log(visibleComponent);
  // }, [visibleComponent]);

  // return (
  //   <div>
  //     <ComponentA ref={(ref) => registerComponentRef(ref, 'componentA')} id="componentA" />
  //     <ComponentB ref={(ref) => registerComponentRef(ref, 'componentB')} id="componentB" />
  //     {visibleComponent === 'componentA' ? <p>Component A is on screen</p> : null}
  //     {visibleComponent === 'componentB' ? <p>Component B is on screen</p> : null}
  //   </div>
  // );

  // const myRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log(entry);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  return (
    <div>
      <Header />
      <Nav />
      <About
      // ref={(ref) => registerComponentRef(ref, "componentA")}
      />
      <Experience
      // ref={(ref) => registerComponentRef(ref, "componentB")}
      />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
