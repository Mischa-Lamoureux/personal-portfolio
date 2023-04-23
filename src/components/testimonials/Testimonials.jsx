import React from "react";
import "./testimonials.css";
import CLIENT from "../../assets/me-about.jpg";
import STEFAN from "../../assets/stefan-rasporich.png";
import MOHAMED from "../../assets/mohamed-hassan.jpeg";
import NICK from "../../assets/nick-kidd.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: STEFAN,
    name: "Stefan Rasporich",
    company: "Infinite Mind Pictures",
    review:
      "Mischa’s work was always completed in the spirit of bettering the greater community, and his technical prowess facilitated an aesthetic experience that was both functional and visually appealing. He collaborated with our team and helped me to set timelines, troubleshoot, design, debug, and relate the game experience to a user's point of view. Mischa is a gifted communicator, a well-organized, technically adept, and intuitive mentor who is able to lean intentionally into innovation with a positive attitude and a fail-forward approach.",
  },
  // {
  //   avatar: MOHAMED,
  //   name: "Mohamed Hassan",
  //   company: "Swap Robotics",
  //   review:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis expedita nemo est fugiat dolores harum magnam! Repellendus ipsum neque asperiores delectus? Ad, minus soluta magni ullam perferendis rerum aliquid.",
  // },
  // {
  //   avatar: NICK,
  //   name: "Nick Kidd",
  //   company: "Mitch Insurance",
  //   review:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis expedita nemo est fugiat dolores harum magnam! Repellendus ipsum neque asperiores delectus? Ad, minus soluta magni ullam perferendis rerum aliquid.",
  // },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from employers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, company, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <h6 className="client__company">{company}</h6>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
