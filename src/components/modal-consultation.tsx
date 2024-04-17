import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import ReservationForm from "./reservation-form";

type ConsultationModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export default function ConsultationModal({ isOpen, closeModal, item }: ConsultationModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:w-max">
                <div className="flex justify-end">
                  <button className="focus:outline-none" onClick={closeModal}>
                    <XMarkIcon className="h-6 w-6 text-slate-900" />
                  </button>
                </div>

                <div className="container mb-8 flex justify-between gap-4 md:max-w-xl">
                  <p className="font-bold">{item.name}</p>

                  {"destination" in item && (
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>

                      <p className="capitalize"> {item.destination}</p>
                    </div>
                  )}
                </div>

                {/* Reservation Form */}
                {"location" in item ? (
                  <ReservationForm
                    name={item.name}
                    destination={!!item.location ? `${item.location as string} ${item.destination}` : ""}
                  />
                ) : (
                  <ReservationForm name={item.name} destination={item.destination} />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
