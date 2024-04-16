import type { Metadata } from "next";

import Hero from "@/components/hero";
import Section from "@/components/section";
import ClickableServices from "@/components/clickable-services";
import { CarouselServices } from "@/components/carousel";
import { LinkButton } from "@/components/buttons/buttons";

import { getCtasData } from "@/lang/translations";
import { getHomeData } from "@/app/data/fetchers";
import { Locale } from "@/constants/locale";

export const metadata: Metadata = {
  title: "Maiarc Concierge",
  description: "Maiarc Concierge",
};

type HomePageProps = {
  params: {
    locale: string;
  };
};

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const homeData = await getHomeData(locale as Locale);
  const { more } = await getCtasData();

  const { hero, servicesBlock, clickableServices } = homeData;

  return (
    <main>
      <Hero images={hero.images} />

      <Section title={servicesBlock.title} text={servicesBlock.text}>
        <ClickableServices services={clickableServices} />
        <CarouselServices services={servicesBlock.services} />
        <LinkButton link="/contacto" text={more} />
      </Section>
    </main>
  );
}
