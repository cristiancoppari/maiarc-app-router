import type { Metadata } from "next";
import type { ContactFormData } from "@/types/forms";

import { Locale } from "@/constants/locale";

import Section from "@/components/section";
import ContactForm from "@/components/contact-form";

import { getContactPageTranslations } from "@/lang/translations";
import { getContactPageData } from "@/data/fetchers";

export const metadata: Metadata = {
  title: "Maiarc Concierge - Contacto",
  description: "Maiarc Concierge - Contacto",
};

type ContactoPageProps = {
  params: {
    locale: string;
  };
};

export default async function ContactoPage({ params: { locale } }: ContactoPageProps) {
  const contactPageData = await getContactPageData(locale as Locale);
  const { form, messages } = await getContactPageTranslations();

  const { block1 } = contactPageData;

  const contactFormData: ContactFormData = {
    form,
    messages,
  };

  return (
    <main>
      <Section title={block1.title} text={block1.text} container classes="mt-24"></Section>
      <ContactForm data={contactFormData} />
    </main>
  );
}
