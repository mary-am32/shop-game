import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

//import requires modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "./gameswiper.css";
import GameSlide from "./GameSlide";

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);
  const handletogglevideo = () => {
    setActive(!active);
  };
  return (

    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
          delay:2500,
          disableOnInteraction:false,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameswiper"
    >
      {games.map(game => (
        <SwiperSlide key={game._id}>
        <GameSlide
          game={game}
          active={active}
          toggleVideo={handletogglevideo}
        />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameSwiper;
