"use client";

import type { PropsWithChildren } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CardSlide from "./card-slide";
import ImageTitle from "@/components/image-title";
import Section from "@/components/section";
import { Hotel, PremiumVehicle, SuperYatch, UniqueExperience, Villa, Yatch } from "@/types/services";

type CarouselServicesProps = {
  services: {
    id: number;
    name: string;
    mainImage: string;
  }[];
};

type LuxuryAccommodationsResultsCarouselProps = {
  villas: Villa[];
  hotels?: Hotel[];
};

type YatchsResultsCarouselProps = {
  yatchs: Yatch[] | SuperYatch[];
};

type PremiumVehiclesResultsCarouselProps = {
  vehicles: PremiumVehicle[];
};

type UniqueExperiencesCarouselProps = {
  uniqueExperiences: UniqueExperience[];
};

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

export function AccommodationsCarousel({ services }: CarouselServicesProps) {
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

export function LuxuryAccommodationsResultsCarousel({ villas, hotels }: LuxuryAccommodationsResultsCarouselProps) {
  return (
    <Section classes="container" noPadding id="luxuryAccommodations">
      <Carousel>
        {villas.map((villa) => (
          <SwiperSlide key={villa.id} className="p-4">
            <CardSlide service={villa} />
          </SwiperSlide>
        ))}
      </Carousel>

      {!!hotels && (
        <Carousel>
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id} className="p-4">
              <CardSlide service={hotel} />
            </SwiperSlide>
          ))}
        </Carousel>
      )}
    </Section>
  );
}

export function YatchsResultsCarousel({ yatchs }: YatchsResultsCarouselProps) {
  return (
    <Section classes="container" noPadding id="yatchs">
      <Carousel>
        {yatchs.map((yatch) => (
          <SwiperSlide key={yatch.id} className="p-4">
            <CardSlide service={yatch} />
          </SwiperSlide>
        ))}
      </Carousel>
    </Section>
  );
}

export function PremiumVehiclesResultsCarousel({ vehicles }: PremiumVehiclesResultsCarouselProps) {
  return (
    <Section classes="container" noPadding id="premiumVehicles">
      <Carousel>
        {vehicles.map((vehicle) => (
          <SwiperSlide key={vehicle.id} className="p-4">
            <CardSlide service={vehicle} />
          </SwiperSlide>
        ))}
      </Carousel>
    </Section>
  );
}

export function UniqueExperiencesCarousel({ uniqueExperiences }: UniqueExperiencesCarouselProps) {
  return (
    <Section classes="container" noPadding id="uniqueExperiences">
      <Carousel>
        {uniqueExperiences.map((uniqueExperience) => (
          <SwiperSlide key={uniqueExperience.id} className="p-4">
            <CardSlide service={uniqueExperience} />
          </SwiperSlide>
        ))}
      </Carousel>
    </Section>
  );
}
