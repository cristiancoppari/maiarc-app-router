import BigImage from "@/components/big-card";
import { Service } from "@/types/services";

interface BigGalleryProps {
  services: Service[];
  cta: string;
}

export default function BigGallery({ services, cta }: BigGalleryProps) {
  const [service_1, service_2] = services;

  return (
    <div className="md:w-6/7 sm:w-7/8 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-11/12">
      <BigImage
        image={service_1.mainImage}
        title={service_1.name}
        link={"/experiencias-unicas"}
        description={service_1.description ?? ""}
        cta_label={cta}
      />

      <BigImage
        image={service_2.mainImage}
        title={service_2.name}
        link={"/super-yates"}
        description={service_2.description ?? ""}
        cta_label={cta}
      />
    </div>
  );
}
