import { montserrat } from "@/constants/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/buttons/buttons";
import { useHeaderTranslations, useFooterTranslations } from "@/lang/translations";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import { LOCALES } from "@/constants/locale";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const { leftNavKeys, rightNavKeys, destinationsKeys } = useHeaderTranslations();
  const { content } = useFooterTranslations();
  const headerProps = { leftNavKeys, rightNavKeys, destinationsKeys };

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <Header {...headerProps} />
        {children}
        <Footer content={content} />
        <WhatsappButton />
      </body>
    </html>
  );
}
