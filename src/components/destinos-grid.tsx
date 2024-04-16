"use client";

import { Link } from "@/lang/navigation";
import ImageTitle from "@/components/image-title";
import { useSearchParams } from "next/navigation";

type DestinosGridProps = {
  destinations: any[];
};

export default function DestinosGrid({ destinations }: DestinosGridProps) {
  const queryParams = useSearchParams();
  const service = queryParams.get("service");

  return (
    <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {destinations
        .sort((a, b) => a.order - b.order)
        .map((destination) => (
          <Link
            href={`/destinos/${destination.slug}/${service ? "?service=" + service : ""}&hideCards=true`}
            key={destination.id}
          >
            <ImageTitle classes="capitalize" title={destination.name} image={destination.mainImage} />
          </Link>
        ))}
    </div>
  );
}
