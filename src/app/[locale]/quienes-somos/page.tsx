import type { Metadata } from "next";

import ReactMarkdown from "react-markdown";

import Hero from "@/components/hero";
import TextImage from "@/components/text-image";
import BigGallery from "@/components/big-gallery";
import TextWithBackground from "@/components/text-with-background";

import { getAboutUsPageData } from "@/data/fetchers";
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

export default async function QuienesSomosPage({ params: { locale } }: HomePageProps) {
  const aboutPageData = await getAboutUsPageData(locale as Locale);

  const { images, section1, block1, block2, blockWithBackground } = aboutPageData;

  const content = (
    <>
      <h2 className="h2 mb-8">{section1.title}</h2>

      <ReactMarkdown>{section1.text}</ReactMarkdown>
    </>
  );

  const items = [block1, block2];

  return (
    <main>
      <Hero images={images} />
      <TextImage content={content} image={section1.mainImage} theme={section1.style} direction="left" />
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