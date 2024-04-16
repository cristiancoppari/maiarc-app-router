import type { Metadata } from "next";

import Hero from "@/app/components/hero";
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

  const { hero } = homeData;

  return (
    <main>
      <Hero images={hero.images} />
    </main>
  );
}
