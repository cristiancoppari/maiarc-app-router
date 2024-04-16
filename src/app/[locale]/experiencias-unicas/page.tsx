import type { Metadata } from "next";

import { Locale } from "@/constants/locale";

import Hero from "@/components/hero";
import Section from "@/components/section";
import TextImage from "@/components/text-image";
import { LinkButton } from "@/components/buttons/buttons";

import { getPremiumServicePageData } from "@/data/fetchers";

export const metadata: Metadata = {
  title: "Maiarc Concierge",
  description: "Maiarc Concierge",
};

type ExperienciasUnicasPageProps = {
  params: {
    locale: string;
  };
};

export default async function ExperienciasUnicasPage({ params: { locale } }: ExperienciasUnicasPageProps) {
  const premiumServicePageData = await getPremiumServicePageData(locale as Locale, "unique-experience");

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
