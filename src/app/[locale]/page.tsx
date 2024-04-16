import { getHeaderTranslations } from "@/lang/translations";

type HomePageProps = {
  params: {
    locale: string;
  };
};

export default async function HomePage({ params: { locale } }: HomePageProps) {
  return <div>page</div>;
}
