import type { Metadata } from "next";

import { montserrat } from "@/constants/fonts";
import Header from "@/components/layout/header";
import { useHeaderTranslations } from "@/lang/translations";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { leftNavKeys, rightNavKeys, destinationsKeys } = useHeaderTranslations();
  const headerProps = { leftNavKeys, rightNavKeys, destinationsKeys };

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <Header {...headerProps} />

        {children}
      </body>
    </html>
  );
}
