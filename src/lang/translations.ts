import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";

const leftNavKeys = ["quienes-somos", "destinos", "real-estate"];
const rightNavKeys = ["experiencias-unicas", "super-yates", "contacto"];
const destinationsKeys = ["ibiza", "tulum", "punta-del-este", "miami"];

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

export async function getCtasData() {
  const t = await getTranslations("ctas");

  return {
    more: t("more"),
  };
}
