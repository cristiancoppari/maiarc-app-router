import type { Root as ApiResponseHomePage } from "@/types/api/api-home-data";

import type { Locale } from "@/constants/locale";

const FALLBACK_IMAGE = "/images/default.jpeg";

export async function getHomeData(locale: Locale) {
  try {
    const res = await fetch(`${process.env.API_URL}/home-page/?populate=deep&locale=${locale}`);

    if (!res.ok) throw new Error("Failed to fetch home data");

    const data: ApiResponseHomePage = await res.json();

    const homePageData = {
      hero: {
        images: data.data.attributes.hero.images.data.map((image) => {
          return image.attributes.url || FALLBACK_IMAGE;
        }),
      },
    } as const;

    return homePageData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch home data");
  }
}
