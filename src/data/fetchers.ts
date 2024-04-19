import type { Locale } from "@/constants/locale";

// pages
import type { Root as ApiResponseHomePage } from "@/types/api/api-home-data";
import type { Root as ApiResponseAboutUsPage } from "@/types/api/api-about-us-data";
import type { Root as ApiResponsePremiumServicePage } from "@/types/api/api-premium-service-data";
import type { Root as ApiResponseDestinoPage } from "@/types/api/api-destino-page-data";
import type { Root as ApiResponseDestinosPage } from "@/types/api/api-destinos-page-data";
import type { Root as ApiResponseContactPage } from "@/types/api/api-contact-page-data";

// services
import type { Root as ApiResponseVilla } from "@/types/api/api-villas-data";
import type { Root as ApiResponseHotels } from "@/types/api/api-hotels-data";
import type { Root as ApiResponseYatches } from "@/types/api/api-yatches-data";
import type { Root as ApiResponseDestinations } from "@/types/api/api-destinations-data";
import type { Root as ApiResponsePremiumVehicles } from "@/types/api/api-premium-vehicles-data";

// premium services
import type { Root as ApiResponseUniqueExperience } from "@/types/api/api-unique-experiences-data";
import type { Root as ApiResponseSuperYatches } from "@/types/api/api-super-yatches-data";
// import type { Root as ApiResponseRealEstates } from "@/types/api/api-real-estates-data";

const FALLBACK_IMAGE = "/images/default.jpeg";

// pages
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

export async function getAboutUsPageData(locale: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/about-us/?populate=deep&locale=${locale}`);

    if (!res.ok) throw new Error("Failed to fetch home data");

    const data: ApiResponseAboutUsPage = await res.json();

    const aboutUsPageData = {
      images: data.data.attributes.images.images.data.map((image) => {
        return image.attributes.url;
      }),
      section1: {
        title: data.data.attributes.section_1.title,
        text: data.data.attributes.section_1.text,
        style: data.data.attributes.section_1.style,
        image: data.data.attributes.section_1.image,
        mainImage: data.data.attributes.section_1.main_image.data.attributes.url,
      },
      block1: {
        name: data.data.attributes.block_1.title,
        description: data.data.attributes.block_1.text,
        mainImage: data.data.attributes.block_1.main_image.data.attributes.url,
      },
      block2: {
        name: data.data.attributes.block_2.title,
        description: data.data.attributes.block_2.text,
        mainImage: data.data.attributes.block_2.main_image.data.attributes.url,
      },
      blockWithBackground: {
        title1: data.data.attributes.block_with_background.title_1,
        title2: data.data.attributes.block_with_background.title_2,
        text: data.data.attributes.block_with_background.text,
        backgroundImage:
          data.data.attributes.block_with_background.background_image.data.attributes.url || FALLBACK_IMAGE,
      },
    };

    return aboutUsPageData;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
}

export const getPremiumServicePageData = async (locale: string, service: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/${service}-page/?populate=deep&locale=${locale}`);

    const data: ApiResponsePremiumServicePage = await res.json();

    const premiumServicePage = {
      hero: {
        images: data.data.attributes.hero.images.data.map((image) => {
          return image.attributes.url;
        }),
      },
      block1: {
        title: data.data.attributes.block_1.title,
        text: data.data.attributes.block_1.text,
        style: data.data.attributes.block_1.style,
        image: data.data.attributes.block_1.image,
        mainImage: data.data.attributes.block_1.main_image.data.attributes.url,
      },
      block2: {
        title: data.data.attributes.block_2.title,
        text: data.data.attributes.block_2.text,
        style: data.data.attributes.block_2.style,
        image: data.data.attributes.block_2.image,
        mainImage: data.data.attributes.block_2.main_image.data.attributes.url,
      },
    };

    return premiumServicePage;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const getDestinosPageData = async (locale: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/destinos-page/?populate=deep&locale=${locale}`);

    if (!res.ok) throw new Error("Failed to fetch destinos page data");

    const data: ApiResponseDestinosPage = await res.json();

    const destinosPageData = {
      block1: {
        title: data.data.attributes.block_1.title,
        text: data.data.attributes.block_1.text,
      },
    };

    return destinosPageData;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const getContactPageData = async (locale: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/contact-page/?populate=deep&locale=${locale}`);

    if (!res.ok) throw new Error("Failed to fetch contact page data");

    const data: ApiResponseContactPage = await res.json();

    const contactPageData = {
      hero: {
        images: data.data.attributes.hero.images.data.map((image) => {
          return image.attributes.url;
        }),
      },
      block1: {
        title: data.data.attributes.block_1.title,
        text: data.data.attributes.block_1.text,
      },
    };

    return contactPageData;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const getDestinoPageData = async (locale: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/destino-page/?populate=deep&locale=${locale}`);

    const data: ApiResponseDestinoPage = await res.json();

    if (!res.ok) throw new Error("Failed to fetch destino page data");

    const destinoPageData = {
      title: data.data.attributes.title,
      texts: {
        miami: data.data.attributes.miami_text,
        ibiza: data.data.attributes.ibiza_text,
        tulum: data.data.attributes.tulum_text,
        "punta-del-este": data.data.attributes.pde_text,
      },
      services: data.data.attributes.clickable_services.data.map((service) => {
        return {
          id: service.id,
          name: service.attributes.name,
          mainImage: service.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
          selector: service.attributes.selector,
          tulumImg: service.attributes.tulum_img.data?.attributes.url || FALLBACK_IMAGE,
          pdeImg: service.attributes.pde_img.data?.attributes.url || FALLBACK_IMAGE,
          miamiImg: service.attributes.miami_img.data?.attributes.url || FALLBACK_IMAGE,
          ibizaImg: service.attributes.ibiza_img.data?.attributes.url || FALLBACK_IMAGE,
        };
      }),
      heroImages: {
        ibiza: data.data.attributes.images_ibiza.data.map((image) => image.attributes.url || FALLBACK_IMAGE),
        tulum: data.data.attributes.images_tulum.data.map((image) => image.attributes.url || FALLBACK_IMAGE),
        miami: data.data.attributes.images_miami.data.map((image) => image.attributes.url || FALLBACK_IMAGE),
        "punta-del-este": data.data.attributes.images_punta_del_este.data.map(
          (image) => image.attributes.url || FALLBACK_IMAGE,
        ),
      },
    };

    return destinoPageData;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

// fetch items like villas, hotels, etc
export async function getDestinations() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/destinations/?fields=name&populate[main_image][fields]=url&fields=slug&fields=order`,
    );

    if (!res.ok) throw new Error("Failed to fetch destinations");

    const data: ApiResponseDestinations = await res.json();

    const destinations = data.data.map((element) => {
      return {
        id: element.id,
        name: element.attributes.name,
        mainImage: element.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
        slug: element.attributes.slug,
        order: element.attributes.order,
      };
    });

    return destinations;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
}

export async function getHotels() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/hotels/?fields=name&fields=includes_breakfast&fields=stars&fields=capacity&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name?locale=all&fields=uuid`,
    );

    if (!res.ok) throw new Error("Failed to fetch hotels");

    const data: ApiResponseHotels = await res.json();

    const hotels = data.data.map((element) => {
      return {
        id: element.id,
        name: element.attributes.name,
        mainImage: element.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url || FALLBACK_IMAGE;
        }),
        destination: element.attributes.destination.data.attributes.name,
        capacity: element.attributes.capacity,
        stars: element.attributes.stars,
        location: element.attributes.location,
        uuid: element.attributes.uuid,
      };
    });

    return hotels;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
}

export async function getVillas() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/villas/?fields=name&fields=locale&fields=capacity&fields=rooms&fields=includes_breakfast&populate[main_image][fields]=url&populate[images][fields]=url&fields=location&populate[destination][fields]=name&fields=uuid&fields=order`,
    );

    if (!res.ok) throw new Error("Failed to fetch villas");

    const data: ApiResponseVilla = await res.json();

    const villas = data.data.map((element) => {
      return {
        id: element.id,
        name: element.attributes.name,
        location: element.attributes.location,
        destination: element.attributes.destination.data.attributes.name,
        mainImage: element.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url || FALLBACK_IMAGE;
        }),
        rooms: element.attributes.rooms,
        capacity: element.attributes.capacity,
        includesBreakfast: element.attributes.includes_breakfast,
        uuid: element.attributes.uuid,
        order: element.attributes.order,
      };
    });

    return villas;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
}

export async function getYatches() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/yatches/?fields[0]=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name&fields=capacity&fields=uuid`,
    );

    const data: ApiResponseYatches = await res.json();

    const yatchs = data.data.map((element) => {
      return {
        id: element.id,
        name: element.attributes.name,
        mainImage: element.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url || FALLBACK_IMAGE;
        }),
        destination: element.attributes.destination.data.attributes.name,
        location: element.attributes.location || null,
        capacity: element.attributes.capacity,
        uuid: element.attributes.uuid,
      };
    });

    return yatchs;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
}

export async function getPremiumVehicles() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/premium-vehicles/?fields=name&fields=type&fields=capacity&fields=transmission&fields=type&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name&fields=uuid`,
    );

    if (!res.ok) throw new Error("Failed to fetch premium vehicles");

    const data: ApiResponsePremiumVehicles = await res.json();

    const vehicles = data.data.map((element) => {
      return {
        id: element.id,
        name: element.attributes.name,
        mainImage: element.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url || FALLBACK_IMAGE;
        }),
        destination: element.attributes.destination.data.attributes.name,
        capacity: element.attributes.capacity,
        type: element.attributes.type,
        transmission: element.attributes.transmission,
        uuid: element.attributes.uuid,
      };
    });

    return vehicles;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
}

// premium services
export async function getUniqueExperiences(locale: Locale) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/unique-experiences/?fields=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&fields=description&fields=uuid&locale=${locale}`,
    );

    if (!res.ok) throw new Error("Failed to fetch unique experiences");

    const data: ApiResponseUniqueExperience = await res.json();

    const unique_experiences = data.data.map((element) => {
      return {
        id: element.id,
        name: element.attributes.name,
        mainImage: element.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
        // images: element.attributes.images.data.map((image) => {
        //   return image;
        // }),
        location: element.attributes.location || null,
        uuid: element.attributes.uuid,
      };
    });

    return unique_experiences;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
}

export async function getSuperYatches() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/super-yatches/?fields=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name&fields=capacity&fields=uuid&fields=cabins`,
    );

    const data: ApiResponseSuperYatches = await res.json();

    const superYatchesData = data.data.map((element) => {
      return {
        id: element.id,
        name: element.attributes.name,
        mainImage: element.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url || FALLBACK_IMAGE;
        }),
        location: element.attributes.location,
        capacity: element.attributes.capacity || null,
        cabins: element.attributes.cabins || null,
        uuid: element.attributes.uuid,
      };
    });

    return superYatchesData;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
}

// export async function getRealEstates() {
//   try {
//     const res = await fetch(
//       `${process.env.API_URL}/real-estates/?fields=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&fields=bathrooms&fields=uuid`,
//     );

//     if (!res.ok) throw new Error("Failed to fetch real estates");

//     const data: ApiResponseRealEstates = await res.json();

//     const realEstateData = data.data.map((element) => {
//       return {
//         id: element.id,
//         name: element.attributes.name,
//         mainImage: element.attributes.main_image.data.attributes.url || FALLBACK_IMAGE,
//         images: element.attributes.images.data.map((image) => {
//           return image.attributes.url;
//         }),
//         location: element.attributes.location ?? null,
//         bathrooms: element.attributes.bathrooms ?? null,
//         uuid: element.attributes.uuid,
//         destination: "",
//       };
//     });

//     return realEstateData;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Hubo un error");
//   }
// }
