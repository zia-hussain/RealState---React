import "./Residencies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSetting } from "../../utils/common";
import { SliderButtons } from "./SliderButtons";
import { useState } from "react";
const Residencies = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.activeIndex);
  };
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSetting} onSlideChange={handleSlideChange}>
          <SliderButtons slideIndex={slideIndex} />

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>Rs:</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
