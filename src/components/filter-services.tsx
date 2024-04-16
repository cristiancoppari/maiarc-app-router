"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { DESTINATION_NAMES } from "@/constants/destinations";

import Section from "@/components/section";
import { Destinations } from "@/types/destinations";

type FilterServicesProps = {
  sectionTitle: string;
  sectionText: string;
  destination: Destinations;
};

export default function FilterServices({ sectionTitle, sectionText, destination }: FilterServicesProps) {
  const searchParams = useSearchParams();

  const serviceNameSearchParam = searchParams.get("serviceName");
  const hideCardsSearchParam = searchParams.get("hideCards");

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const title = hideCardsSearchParam
    ? `${serviceNameSearchParam} ${DESTINATION_NAMES[destination]}`
    : `${sectionTitle} ${DESTINATION_NAMES[destination]}`;

  return <Section title={title} text={sectionText} container></Section>;
}
