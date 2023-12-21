/* eslint-disable react/prop-types */
import { useSwiper } from "swiper/react";
import data from "../../utils/accordion";

export const SliderButtons = ({ slideIndex }) => {
  const swiper = useSwiper();

  return (
    <div className="r-buttons">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        disabled={slideIndex === 0}
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={slideIndex === data.length - 1}
      >
        &gt;
      </button>
    </div>
  );
};
