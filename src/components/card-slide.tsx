"use client";

import { useState } from "react";

import { BsCarFrontFill, BsPeople } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import ConsultationModal from "./modal-consultation";
import CarouselModal from "./modal-carousel";
import { Button } from "@/components/ui/button";

const CardSlide: React.FC<CardSlideProps> = ({ service }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false);

  const openConsultationModal = (): void => {
    setIsConsultationModalOpen(true);
  };

  const openCarouselModal = (): void => {
    setIsCarouselModalOpen(true);
  };

  const closeConsultationModal = (): void => {
    setIsConsultationModalOpen(false);
  };

  const closeCarouselModal = (): void => {
    setIsCarouselModalOpen(false);
  };

  return (
    <>
      <div className="shadow-xl">
        <img
          src={service.main_image}
          alt=""
          className="h-52 w-full object-cover"
          onClick={() => {
            openCarouselModal();
          }}
        />

        <div className="bg-zinc-100 p-6 text-slate-900">
          <h4 className="h4 --font-lora mb-4 text-left">{service.name}</h4>
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-4">
              {/* Capacity */}
              {"capacity" in service && (
                <div className="flex items-center gap-2">
                  <BsPeople className="h-6 w-6" />

                  <p className="text-sm">{service.capacity}</p>
                </div>
              )}

              {/* Destination and location */}
              {"destination" in service && (
                <div className="flex items-center gap-2">
                  <IoLocationOutline className="h-6 w-6" />
                  <p className="text-sm capitalize">
                    {"location" in service && service.location ? `${service.location},` : ""} {service.destination}
                  </p>
                </div>
              )}

              {/* Location */}
              {"location" in service && !("destination" in service) && (
                <div className="flex items-center gap-2">
                  <IoLocationOutline className="h-6 w-6" />
                  <p className="text-sm capitalize">{service.location}</p>
                </div>
              )}

              {/* Breakfast */}
              {"includes_breakfast" in service && service.includes_breakfast && (
                <div className="flex items-center gap-2">
                  <MdOutlineFreeBreakfast className="h-6 w-6" />

                  <p className="text-sm">{c.card.included}</p>
                </div>
              )}

              {/* Transmission */}
              {"transmission" in service && (
                <div className="flex items-center gap-2">
                  <TbManualGearbox className="h-6 w-6" />

                  <p className="text-sm capitalize">{service.transmission}</p>
                </div>
              )}

              {/* Type */}
              {"type" in service && (
                <div className="flex items-center gap-2">
                  <BsCarFrontFill className="h-6 w-6" />

                  <p className="text-sm capitalize">{service.type}</p>
                </div>
              )}
            </div>

            <Button
              variant="link"
              onClick={() => {
                openConsultationModal();
              }}
              className="p-0"
            >
              {c.ctas.consultation}
            </Button>
          </div>
        </div>
      </div>

      <ConsultationModal isOpen={isConsultationModalOpen} closeModal={closeConsultationModal} item={service} />

      <CarouselModal isOpen={isCarouselModalOpen} closeModal={closeCarouselModal}>
        <>
          <Swiper
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {service.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt="" className="mx-auto h-[500px] object-contain" />
              </SwiperSlide>
            ))}
            <div className="modal-bullets custom-pagination mt-4"></div>
          </Swiper>
        </>
      </CarouselModal>
    </>
  );
};

export default CardSlide;
