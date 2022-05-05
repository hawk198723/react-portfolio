import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Ashton Kutcher",
    review:
      "I'm continually trying to make choices that put me against my own comfort zone. As long as you're uncomfortable, it means you're growing.",
  },
  {
    avatar: AVATAR2,
    name: "Evan Spiegel",
    review:
      "I think everyone is born creative but it can be suppressed by fear.",
  },
  {
    avatar: AVATAR3,
    name: "Omer Shai",
    review: "Avoiding mistakes costs more than making them.",
  },
  {
    avatar: AVATAR4,
    name: "Sheryl Sandberg",
    review:
      "Knowing that things could be worse should not stop us from trying to make them better.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Inspiring</h5>
      <h2>Quotes</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
