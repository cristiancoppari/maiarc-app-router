import ImageTitle from "./image-title";

import { Link } from "@/lang/navigation";

type ClickableServicesProps = {
  services: {
    id: number;
    name: string;
    mainImage: string;
    selector: string;
  }[];
};

export default function ClickableServices({ services }: ClickableServicesProps) {
  return (
    <div className="container mb-12 grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
      {services.map((service) => {
        return (
          <Link key={service.id} href={`/destinos/?serviceSelector=${service.selector}&serviceName=${service.name}`}>
            <ImageTitle image={service.mainImage} title={service.name} />
          </Link>
        );
      })}
    </div>
  );
}
