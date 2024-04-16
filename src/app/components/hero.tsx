"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

type HeroProps = {
  images: string[];
};

export function Hero({ images }: HeroProps) {
  return (
    <section style={{ height: "calc(100vh - 200px)" }}>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        effect="fade"
        modules={[Pagination, Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source media="(min-width: 1280px)" srcSet={image} />
              <source media="(min-width: 1024px)" srcSet={image} />
              <source media="(min-width: 768px)" srcSet={image} />
              <img src={image} alt="" className="h-full w-full bg-center object-cover" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
