import React from "react";
import "./testimonials.css";
import STEFAN from "../../assets/stefan-rasporich.png";
import MOHAMED from "../../assets/mohamed-hassan.jpeg";
import NICK from "../../assets/nick-kidd.jpeg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: NICK,
    name: "Nick Kidd",
    company: "Mitch Insurance",
    review: [
      "Mischa undertook a Co-Op placement in Quotey in 2022 and was able to add some real value to the company during this time. He was engaged in two key projects: firstly, helping to troubleshoot and optimize a rating model interface which required some substantial re-coding. The second involved creating a feedback loop through which users can report feedback and ideas directly from our platform into our JIRA platform.",
      "Both projects required learning and research of new code frameworks which Mischa was able to do very well. He works hard, asks a lot of really smart questions and learns fast so that he can make a difference. He was also a great member of the team - with lots of good ideas, positive contributions and a friendly personality.",
      "It was a pleasure having Mischa on the team and I’m excited to see how he continues to develop as the years go by! I’d highly recommend him.",
    ],
  },
  {
    avatar: STEFAN,
    name: "Stefan Rasporich",
    company: "Infinite Mind Pictures",
    review: [
      "Mischa’s work was always completed in the spirit of bettering the greater community, and his technical prowess facilitated an aesthetic experience that was both functional and visually appealing. He collaborated with our team and helped me to set timelines, troubleshoot, design, debug, and relate the game experience to a user's point of view. Mischa is a gifted communicator, a well-organized, technically adept, and intuitive mentor who is able to lean intentionally into innovation with a positive attitude and a fail-forward approach.",
    ],
  },
  // {
  //   avatar: MOHAMED,
  //   name: "Mohamed Hassan",
  //   company: "Swap Robotics",
  //   review:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis expedita nemo est fugiat dolores harum magnam! Repellendus ipsum neque asperiores delectus? Ad, minus soluta magni ullam perferendis rerum aliquid.",
  // },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Employers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
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
              {review.map((text) => (
                <small className="client__review">{text}</small>
              ))}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
