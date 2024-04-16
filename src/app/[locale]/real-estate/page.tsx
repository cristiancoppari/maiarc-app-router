import type { Metadata } from "next";

import Hero from "@/components/hero";
import TextImage from "@/components/text-image";

import { Locale } from "@/constants/locale";

import Section from "@/components/section";
import { LinkButton } from "@/components/buttons/buttons";

import { getPremiumServicePageData } from "@/data/fetchers";

export const metadata: Metadata = {
  title: "Maiarc Concierge",
  description: "Maiarc Concierge",
};

type RealEstatePageProps = {
  params: {
    locale: string;
  };
};

export default async function RealEstatePage({ params: { locale } }: RealEstatePageProps) {
  const premiumServicePageData = await getPremiumServicePageData(locale as Locale, "real-estate");

  const { hero, block1, block2 } = premiumServicePageData;

  return (
    <main>
      <Hero images={hero.images} />

      <TextImage
        title={block1.title}
        content={block1.text}
        image={block1.mainImage}
        theme={block1.style}
        direction={block1.image}
      />

      <TextImage
        title={block2.title}
        content={block2.text}
        image={block2.mainImage}
        theme={block2.style}
        direction={block2.image}
      />

      <Section container noPadding>
        <LinkButton link={"/contacto"} text={locale === "es" ? "Contactanos" : "Contact us"} classes="mt-12" />
      </Section>
    </main>
  );
}
