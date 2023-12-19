import { useSwiper } from "swiper/react";
import "./Residencies.css";

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="r-buttons">
      <button
        onClick={() => {
          console.log("btn clicked");
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default SliderButtons;
