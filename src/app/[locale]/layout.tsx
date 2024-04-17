import { montserrat } from "@/constants/fonts";

import { Toaster } from "sonner";

import Header from "@/components/layout/header";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/buttons/buttons";
import { useHeaderTranslations, useFooterTranslations } from "@/lang/translations";
// import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";
import { unstable_noStore } from "next/cache";

// import { LOCALES } from "@/constants/locale";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // setRequestLocale(locale);
  unstable_noStore();

  const { leftNavKeys, rightNavKeys, destinationsKeys } = useHeaderTranslations();
  const { content } = useFooterTranslations();
  const headerProps = { leftNavKeys, rightNavKeys, destinationsKeys };

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <Header {...headerProps} />
        {children}
        <Footer content={content} />

        <Toaster toastOptions={{ className: "toast" }} />

        <WhatsappButton />
      </body>
    </html>
  );
}
