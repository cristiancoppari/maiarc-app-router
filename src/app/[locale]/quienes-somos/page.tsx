import type { Metadata } from "next";

import { Locale } from "@/constants/locale";

import Hero from "@/components/hero";
import TextImage from "@/components/text-image";
import BigGallery from "@/components/big-gallery";
import TextWithBackground from "@/components/text-with-background";

import { getAboutUsPageData } from "@/data/fetchers";

export const metadata: Metadata = {
  title: "Maiarc Concierge - Who we are",
  description: "Maiarc Concierge - Who we are",
};

type HomePageProps = {
  params: {
    locale: string;
  };
};

export default async function QuienesSomosPage({ params: { locale } }: HomePageProps) {
  const aboutPageData = await getAboutUsPageData(locale as Locale);

  const { images, section1, block1, block2, blockWithBackground } = aboutPageData;

  const items = [block1, block2];

  return (
    <main>
      <Hero images={images} />

      <TextImage
        title={section1.title}
        content={section1.text}
        image={section1.mainImage}
        theme={section1.style}
        direction="left"
      />

      <BigGallery items={items} classNames="section-padding" />

      <TextWithBackground
        title={blockWithBackground.title1}
        subtitle={blockWithBackground.title2}
        text={blockWithBackground.text}
        bgImage={blockWithBackground.backgroundImage}
      />
    </main>
  );
}
