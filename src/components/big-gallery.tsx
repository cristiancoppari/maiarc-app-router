import type { Service } from "@/types/services";

import BigImage from "@/components/big-card";

import { cn } from "@/lib/utils";

interface BigGalleryProps {
  items: Service[];
  cta?: string;
  classNames?: string;
}

export default function BigGallery({ items, cta, classNames }: BigGalleryProps) {
  const [item1, item2] = items;

  return (
    <div className={cn("md:w-6/7 sm:w-7/8 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-11/12", classNames || "")}>
      <BigImage
        image={item1.mainImage}
        title={item1.name}
        link={cta ? "/experiencias-unicas" : ""}
        description={item1.description ?? ""}
        cta_label={cta || ""}
      />

      <BigImage
        image={item2.mainImage}
        title={item2.name}
        link={cta ? "/super-yates" : ""}
        description={item2.description ?? ""}
        cta_label={cta || ""}
      />
    </div>
  );
}
