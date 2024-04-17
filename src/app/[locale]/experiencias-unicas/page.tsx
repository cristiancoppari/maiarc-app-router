import type { Metadata } from "next";

import { Locale } from "@/constants/locale";

import Hero from "@/components/hero";
import Section from "@/components/section";
import TextImage from "@/components/text-image";
import { LinkButton } from "@/components/buttons/buttons";

import FormContextProvider from "@/app/context/form-context";

import { getPremiumServicePageData, getUniqueExperiences } from "@/data/fetchers";
import { getContactPageTranslations } from "@/lang/translations";
import { UniqueExperiencesCarousel } from "@/components/carousel";

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
  const uniqueExperiences = await getUniqueExperiences(locale as Locale);
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
        <UniqueExperiencesCarousel uniqueExperiences={uniqueExperiences} />
      </FormContextProvider>

      <Section container noPadding>
        <LinkButton link={"/contacto"} text={locale === "es" ? "Contactanos" : "Contact us"} classes="mt-12" />
      </Section>
    </main>
  );
}
