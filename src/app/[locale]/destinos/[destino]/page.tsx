import type { Metadata } from "next";
import type { Destinations } from "@/types/destinations";
import type { Locale } from "@/constants/locale";

import { DESTINATION_NAMES, DESTINATION_KEYS } from "@/constants/destinations";

import { notFound } from "next/navigation";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import FormContextProvider from "@/app/context/form-context";

import Hero from "@/components/hero";
import FilterServices from "@/components/filter-services";

import { getDestinoPageData, getVillas, getHotels, getYatches, getPremiumVehicles } from "@/data/fetchers";
import { getContactPageTranslations } from "@/lang/translations";

export const metadata: Metadata = {
  title: "Maiarc Concierge - Destination",
  description: "Maiarc Concierge - Destination",
};

export const dynamic = "force-dynamic";

type ExperienciasUnicasPageProps = {
  params: {
    locale: string;
    destino: Destinations;
  };
};

export async function generateStaticParams() {
  return DESTINATION_KEYS.map((destino) => ({ destino }));
}

export default async function DestinosPage({ params: { locale, destino } }: ExperienciasUnicasPageProps) {
  if (!DESTINATION_KEYS.includes(destino)) notFound();

  setRequestLocale(locale);

  const destinoPageData = await getDestinoPageData(locale as Locale);
  const { form, messages } = await getContactPageTranslations();

  const villas = await getVillas();
  const hotels = await getHotels();
  const yatches = await getYatches();
  const premiumVehicles = await getPremiumVehicles();

  console.log(villas, hotels, yatches, premiumVehicles);

  const villasFiltered = villas.filter((element) => element.destination === DESTINATION_NAMES[destino]);
  const yatchesFiltered = yatches.filter((element) => element.destination === DESTINATION_NAMES[destino]);
  const hotelsFiltered = hotels.filter((element) => element.destination === DESTINATION_NAMES[destino]);
  const premiumVehiclesFiltered = premiumVehicles.filter(
    (element) => element.destination === DESTINATION_NAMES[destino],
  );

  const { title, texts, heroImages, services } = destinoPageData;

  const sectionText = texts[destino]; // Text for the destination
  const images = heroImages[destino]; // Images for the destination

  const parsedServices = services.map((service) => {
    let mainImage = service.mainImage;

    switch (destino) {
      case "ibiza":
        mainImage = service.ibizaImg;
        break;
      case "tulum":
        mainImage = service.tulumImg;
        break;
      case "miami":
        mainImage = service.miamiImg;
        break;
      case "punta-del-este":
        mainImage = service.pdeImg;
        break;
    }

    return {
      id: service.id,
      name: service.name,
      mainImage,
      selector: service.selector,
    };
  });

  const formContent = {
    form,
    messages,
  };

  return (
    <main>
      <Hero images={images}></Hero>
      <FormContextProvider initialValue={formContent}>
        <FilterServices
          sectionTitle={title}
          sectionText={sectionText}
          destination={destino}
          services={parsedServices}
          formContent={formContent}
          villas={villasFiltered}
          hotels={hotelsFiltered}
          yatches={yatchesFiltered}
          premiumVehicles={premiumVehiclesFiltered}
        />
      </FormContextProvider>
    </main>
  );
}
