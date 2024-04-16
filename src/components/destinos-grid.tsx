"use client";

import { Suspense } from "react";

import { Link } from "@/lang/navigation";
import ImageTitle from "@/components/image-title";
import { useSearchParams } from "next/navigation";

type DestinosGridProps = {
  destinations: any[];
};

function DestinosComponent({ destinations }: DestinosGridProps) {
  const queryParams = useSearchParams();
  const serviceSelector = queryParams.get("serviceSelector");
  const serviceName = queryParams.get("serviceName");

  return (
    <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {destinations
        .sort((a, b) => a.order - b.order)
        .map((destination) => {
          const slug = `/destinos/${destination.slug}/${serviceSelector ? "?serviceSelector=" + serviceSelector : ""}&${serviceName ? "serviceName=" + serviceName : ""}&hideCards=true`;
          return (
            <Link href={slug} key={destination.id}>
              <ImageTitle classes="capitalize" title={destination.name} image={destination.mainImage} />
            </Link>
          );
        })}
    </div>
  );
}

// https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
export default function DestinosGrid({ destinations }: DestinosGridProps) {
  return (
    <Suspense>
      <DestinosComponent destinations={destinations} />
    </Suspense>
  );
}
