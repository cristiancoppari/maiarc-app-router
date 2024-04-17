import type { Metadata } from "next";

import { Locale } from "@/constants/locale";

import Hero from "@/components/hero";
import TextImage from "@/components/text-image";
import Section from "@/components/section";
import { LinkButton } from "@/components/buttons/buttons";
import { YatchsResultsCarousel } from "@/components/carousel";

import { getPremiumServicePageData, getSuperYatches } from "@/data/fetchers";
import { getContactPageTranslations } from "@/lang/translations";
import FormContextProvider from "@/app/context/form-context";

export const metadata: Metadata = {
  title: "Maiarc Concierge",
  description: "Maiarc Concierge",
};

type SuperYatesPageProps = {
  params: {
    locale: string;
  };
};

export default async function SuperYatesPage({ params: { locale } }: SuperYatesPageProps) {
  const premiumServicePageData = await getPremiumServicePageData(locale as Locale, "super-yatches");
  const yatchs = await getSuperYatches();
  const { form, messages } = await getContactPageTranslations();

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

      {/* Need this for translations inside a Client Component in CardSlide */}
      {/* Refactor later */}
      <FormContextProvider
        initialValue={{
          form,
          messages,
        }}
      >
        <YatchsResultsCarousel yatchs={yatchs} />
      </FormContextProvider>

      <Section container noPadding>
        <LinkButton link={"/contacto"} text={locale === "es" ? "Contactanos" : "Contact us"} classes="mt-12" />
      </Section>
    </main>
  );
}
