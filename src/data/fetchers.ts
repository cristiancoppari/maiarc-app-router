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
      clickableServices: data.data.attributes.clickable_services.data.map((service) => {
        return {
          id: service.id,
          name: service.attributes.name,
          mainImage: service.attributes.main_image.data.attributes.url,
          selector: service.attributes.selector,
        };
      }),
      servicesBlock: {
        title: data.data.attributes.services_block.title,
        text: data.data.attributes.services_block.text,
        services: data.data.attributes.services_block.services.data.map((service) => {
          return {
            id: service.id,
            name: service.attributes.name,
            mainImage: service.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
          };
        }),
      },
      premiumServicesBlock: {
        services: data.data.attributes.premium_services_block.items.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.name,
            mainImage: item.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
            description: item.attributes.description,
          };
        }),
      },
      accommodationsBlock: {
        title: data.data.attributes.accommodations_block.title,
        text: data.data.attributes.accommodations_block.text,
      },
      communityBlock: {
        title: data.data.attributes.community_block.title,
        text: data.data.attributes.community_block.text,
      },
      newsletterBlock: {
        title: data.data.attributes.newsletter_block.title,
        text: data.data.attributes.newsletter_block.text,
      },
    };

    return homePageData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch home data");
  }
}
