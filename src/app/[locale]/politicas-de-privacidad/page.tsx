import type { Metadata } from "next";

import { usePoliticasDePrivacidadTranslations } from "@/lang/translations";

import Section from "@/components/section";

export const metadata: Metadata = {
  title: "Maiarc Concierge - Privacy Policy",
  description: "Maiarc Concierge - Privacy Policy",
};

export default function PoliticasDePrivacidadPage() {
  const { lastUpdatedAt, sections } = usePoliticasDePrivacidadTranslations();

  return (
    <main>
      <Section title="Privacy Policy" container classes="mt-24">
        <p>{lastUpdatedAt}</p>

        {sections.map((section) => (
          <article key={section.title} className="mt-4">
            <h3 className="h4 mb-2">{section.title}</h3>
            <p>{section.content}</p>
          </article>
        ))}
      </Section>
    </main>
  );
}
