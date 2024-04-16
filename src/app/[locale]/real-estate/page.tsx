import type { Metadata } from "next";

import ReactMarkdown from "react-markdown";

import Hero from "@/components/hero";
import TextImage from "@/components/text-image";

import { getPremiumServicePageData } from "@/data/fetchers";
import { Locale } from "@/constants/locale";
import { LinkButton } from "@/components/buttons/buttons";
import Section from "@/components/section";

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

  const content1 = (
    <>
      <h2>{block1.title}</h2>
      <ReactMarkdown>{block1.text}</ReactMarkdown>
    </>
  );

  const content2 = (
    <>
      <h2>{block2.title}</h2>
      <ReactMarkdown>{block2.text}</ReactMarkdown>
    </>
  );

  return (
    <main>
      <Hero images={hero.images} />
      <TextImage content={content1} image={block1.mainImage} theme={block1.style} direction={block1.image} />
      <TextImage content={content2} image={block2.mainImage} theme={block2.style} direction={block2.image} />

      <Section container noPadding>
        <LinkButton link={"/contacto"} text={locale === "es" ? "Contactanos" : "Contact us"} classes="mt-12" />
      </Section>
    </main>
  );
}
