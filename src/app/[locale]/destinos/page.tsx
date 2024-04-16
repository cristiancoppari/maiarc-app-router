import type { Metadata } from "next";

import { Locale } from "@/constants/locale";

import Section from "@/components/section";
import DestinosGrid from "@/components/destinos-grid";
import { LinkButton } from "@/components/buttons/buttons";

import { getDestinosPageData, getDestinations } from "@/data/fetchers";

export const metadata: Metadata = {
  title: "Maiarc Concierge - Destinations",
  description: "Maiarc Concierge - Destinations",
};

type ExperienciasUnicasPageProps = {
  params: {
    locale: string;
  };
};

export default async function DestinosPage({ params: { locale } }: ExperienciasUnicasPageProps) {
  const premiumServicePageData = await getDestinosPageData(locale as Locale);
  const destinations = await getDestinations();

  const { block1 } = premiumServicePageData;

  return (
    <main>
      <Section title={block1.title} text={block1.text} container classes="mt-24">
        <DestinosGrid destinations={destinations} />
        <LinkButton link={"/contacto"} text={locale === "es" ? "Contactanos" : "Contact us"} classes="mt-12" />
      </Section>
    </main>
  );
}
