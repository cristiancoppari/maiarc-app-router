"use client";

import type { ContactFormData } from "@/types/forms";
import type { Destinations } from "@/types/destinations";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { DESTINATION_NAMES } from "@/constants/destinations";

import Section from "@/components/section";
import {
  LuxuryAccommodationsResultsCarousel,
  YatchsResultsCarousel,
  PremiumVehiclesResultsCarousel,
} from "@/components/carousel";
import { ClickableServicesSelector, Hotel, PremiumVehicle, Villa, Yatch } from "@/types/services";
import { Link } from "@/lang/navigation";
import ImageTitle from "@/components/image-title";

type ParsedService = {
  id: number;
  name: string;
  mainImage: string;
  selector: string;
};

type FilterServicesProps = {
  sectionTitle: string;
  sectionText: string;
  destination: Destinations;
  services: ParsedService[];
  formContent: ContactFormData;
  villas: Villa[];
  hotels: Hotel[];
  yatches: Yatch[];
  premiumVehicles: PremiumVehicle[];
};

export default function FilterServices({
  sectionTitle,
  sectionText,
  destination,
  services,
  villas,
  hotels,
  yatches,
  premiumVehicles,
}: FilterServicesProps) {
  const searchParams = useSearchParams();

  const serviceSelector = searchParams.get("serviceSelector");
  const serviceNameSearchParam = searchParams.get("serviceName");
  const hideCardsSearchParam = searchParams.get("hideCards");
  const sectionClasses = `${hideCardsSearchParam ? "!pb-0" : ""}`;
  const title = hideCardsSearchParam
    ? `${serviceNameSearchParam} ${DESTINATION_NAMES[destination]}`
    : `${sectionTitle} ${DESTINATION_NAMES[destination]}`;

  const [activeSection, setActiveSection] = useState<ClickableServicesSelector>(
    serviceSelector as ClickableServicesSelector,
  );

  const selectSectionHandler = (section: ClickableServicesSelector) => setActiveSection(section);

  return (
    <Section title={title} text={sectionText} classes={sectionClasses} container>
      <Filters
        hideCardsSearchParam={hideCardsSearchParam}
        services={services}
        selectSectionHandler={selectSectionHandler}
      />

      {activeSection === "luxuryAccommodations" && (
        <LuxuryAccommodationsResultsCarousel villas={villas} hotels={hotels} />
      )}
      {activeSection === "yatchs" && <YatchsResultsCarousel yatchs={yatches} />}
      {activeSection === "premiumVehicles" && <PremiumVehiclesResultsCarousel vehicles={premiumVehicles} />}
    </Section>
  );
}

type FiltersProps = {
  hideCardsSearchParam: string | null;
  services: ParsedService[];
  selectSectionHandler: (section: ClickableServicesSelector) => void;
};

function Filters({ hideCardsSearchParam, services, selectSectionHandler }: FiltersProps) {
  return (
    <div className={`${hideCardsSearchParam ? "hidden" : "none"}`}>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => {
          return (
            <Link
              href={`#${service.selector}`}
              key={service.id}
              onClick={() => {
                selectSectionHandler(service.selector as ClickableServicesSelector);
              }}
            >
              <ImageTitle classes="capitalize" title={service.name} image={service.mainImage} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
