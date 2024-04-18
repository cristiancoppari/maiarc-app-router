import { montserrat } from "@/constants/fonts";

import { Toaster } from "sonner";

import Header from "@/components/layout/header";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/buttons/buttons";
import { useHeaderTranslations, useFooterTranslations } from "@/lang/translations";

export const dynamic = "force-dynamic";
// export const revalidate = 1;

export default function LocaleLayout({
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

        <Toaster toastOptions={{ className: "toast" }} />

        <WhatsappButton />
      </body>
    </html>
  );
}
