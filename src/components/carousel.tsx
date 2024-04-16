"use client";

import type { PropsWithChildren } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ImageTitle from "./image-title";

function Carousel({ children }: PropsWithChildren) {
  return (
    <Swiper
      style={{ paddingTop: "2rem" }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        el: ".custom-pagination",
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="normal-carousel"
    >
      {children}

      <div className="custom-pagination mt-4"></div>
    </Swiper>
  );
}

type CarouselServicesProps = {
  services: {
    id: number;
    name: string;
    mainImage: string;
  }[];
};

export function CarouselServices({ services }: CarouselServicesProps) {
  return (
    <Carousel>
      {services.map((service) => {
        return (
          <SwiperSlide key={service.id} className="px-4 pb-12">
            <ImageTitle image={service.mainImage} title={service.name} />
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
}
