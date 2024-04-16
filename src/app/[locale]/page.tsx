import type { Metadata } from "next";

import Hero from "@/components/hero";
import Section from "@/components/section";
import ClickableServices from "@/components/clickable-services";
import { CarouselServices } from "@/components/carousel";
import { LinkButton } from "@/components/buttons/buttons";
import BigGallery from "@/components/big-gallery";
import Newsletter from "@/components/newsletter";

import { getCtasData } from "@/lang/translations";
import { getHomeData } from "@/data/fetchers";
import { Locale } from "@/constants/locale";

export const metadata: Metadata = {
  title: "Maiarc Concierge Agency - Home",
  description: "Maiarc Concierge Agency - Home",
};

type HomePageProps = {
  params: {
    locale: string;
  };
};

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const homeData = await getHomeData(locale as Locale);
  const { more, subscription } = await getCtasData();

  const {
    hero,
    servicesBlock,
    premiumServicesBlock,
    clickableServices,
    accommodationsBlock,
    communityBlock,
    newsletterBlock,
  } = homeData;

  return (
    <main>
      <Hero images={hero.images} />

      <Section title={servicesBlock.title} text={servicesBlock.text} container>
        <ClickableServices services={clickableServices} />
        <CarouselServices services={servicesBlock.services} />
        <LinkButton link="/contacto" text={more} classes="my-16" />
        <BigGallery items={premiumServicesBlock.services} cta={more} />
      </Section>

      <Section title={accommodationsBlock.title} text={accommodationsBlock.text} classes="bg-zinc-200">
        {/* Accommodations */}
      </Section>

      <Section title={communityBlock.title} text={communityBlock.text} container>
        {/* Community */}
      </Section>

      <Newsletter title={newsletterBlock.title} text={newsletterBlock.text} cta={subscription} />
    </main>
  );
}
