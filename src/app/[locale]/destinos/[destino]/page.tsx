import type { Metadata } from "next";
import type { Destinations } from "@/types/destinations";
import type { Locale } from "@/constants/locale";

import { notFound } from "next/navigation";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import Section from "@/components/section";

import { getDestinoPageData } from "@/data/fetchers";

export const metadata: Metadata = {
  title: "Maiarc Concierge - Destination",
  description: "Maiarc Concierge - Destination",
};

type ExperienciasUnicasPageProps = {
  params: {
    locale: string;
    destino: Destinations;
  };
};

const DESTINATION_NAMES = {
  ibiza: "Ibiza",
  tulum: "Tulum",
  "punta-del-este": "Punta del Este",
  miami: "Miami",
} as const;

const DESTINATION_KEYS = Object.keys(DESTINATION_NAMES);

export async function generateStaticParams() {
  return DESTINATION_KEYS.map((destino) => ({ destino }));
}

export default async function DestinosPage({ params: { locale, destino } }: ExperienciasUnicasPageProps) {
  if (!DESTINATION_KEYS.includes(destino)) notFound();

  setRequestLocale(locale);

  const destinoPageData = await getDestinoPageData(locale as Locale);

  const sectionTitle = DESTINATION_NAMES[destino];

  const { title, texts } = destinoPageData;

  return <main>{/* <Section title={title} text={text} container classes="mt-24"></Section> */}</main>;
}
