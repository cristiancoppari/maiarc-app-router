import type { Metadata } from "next";

import Hero from "@/app/components/hero";
import Section from "@/app/components/section";
import ClickableServices from "@/app/components/clickable-services";

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

  const { hero, servicesBlock, clickableServices } = homeData;

  return (
    <main>
      <Hero images={hero.images} />

      <Section title={servicesBlock.title} text={servicesBlock.text}>
        <ClickableServices services={clickableServices} />
      </Section>
    </main>
  );
}
