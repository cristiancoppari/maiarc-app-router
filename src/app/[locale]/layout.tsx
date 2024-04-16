import type { Metadata } from "next";

import { montserrat } from "@/constants/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/footer";
import { useHeaderTranslations, useFooterTranslations } from "@/lang/translations";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { leftNavKeys, rightNavKeys, destinationsKeys } = useHeaderTranslations();
  const { content } = useFooterTranslations();
  const headerProps = { leftNavKeys, rightNavKeys, destinationsKeys };

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <Header {...headerProps} />
        {children}
        <Footer content={content} />
      </body>
    </html>
  );
}
