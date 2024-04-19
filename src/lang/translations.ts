import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";

const leftNavKeys = ["quienes-somos", "destinos", "real-estate"];
const rightNavKeys = ["experiencias-unicas", "super-yates", "contacto"];
const destinationsKeys = ["ibiza", "tulum", "punta-del-este", "miami"];
const sectionKeys = ["section-1", "section-2", "section-3", "section-4", "section-5", "section-6", "section-7"];

export function useHeaderTranslations() {
  const t = useTranslations("header.navbar");

  const leftNavKeysTranslated = leftNavKeys.map((key) => ({
    label: t(`left.${key}`),
    href: `/${key}`,
  }));

  const rightNavKeysTranslated = rightNavKeys.map((key) => ({
    label: t(`right.${key}`),
    href: `/${key}`,
  }));

  const destinationsKeysTranslated = destinationsKeys.map((key) => ({
    label: t(`destinations.${key}`),
    href: `/destinos/${key}`,
  }));

  return {
    leftNavKeys: leftNavKeysTranslated,
    rightNavKeys: rightNavKeysTranslated,
    destinationsKeys: destinationsKeysTranslated,
  };
}

export function useFooterTranslations() {
  const t = useTranslations("footer");

  return {
    content: t("content"),
  };
}

export async function getCtasData() {
  const t = await getTranslations("ctas");

  return {
    more: t("more"),
    subscription: t("subscription"),
  };
}

export async function getContactPageTranslations() {
  const t = await getTranslations("contact");

  return {
    form: {
      name: {
        label: t("form.name.label"),
        placeholder: t("form.name.placeholder"),
      },
      prefix: {
        label: t("form.prefix.label"),
        placeholder: t("form.prefix.placeholder"),
      },
      phone: {
        label: t("form.phone.label"),
        placeholder: t("form.phone.placeholder"),
      },
      email: {
        label: t("form.email.label"),
        placeholder: t("form.email.placeholder"),
      },
      destinations: {
        label: t("form.destinations.label"),
        placeholder: t("form.destinations.placeholder"),
      },
      message: {
        label: t("form.message.label"),
        placeholder: t("form.message.placeholder"),
      },
      dateStart: {
        label: t("form.dateStart.label"),
        placeholder: t("form.dateStart.placeholder"),
      },
      dateEnd: {
        label: t("form.dateEnd.label"),
        placeholder: t("form.dateEnd.placeholder"),
      },
      submit: t("form.submit"),
    },
    messages: {
      success: t("messages.success"),
      error: t("messages.error"),
      sending: t("messages.sending"),
    },
  };
}

export function usePoliticasDePrivacidadTranslations() {
  const t = useTranslations("privacyPolicy");

  return {
    lastUpdatedAt: t("lastUpdated"),
    sections: sectionKeys.map((key) => ({
      title: t(`sections.${key}.title`),
      content: t(`sections.${key}.content`),
    })),
  };
}
