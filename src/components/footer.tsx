import { Link } from "@/lang/navigation";

import { Button } from "@/components/ui/button";

const social: Array<{ icon: string; link: string }> = [
  {
    icon: "/images/facebook.svg",
    link: "https://www.facebook.com/maiarc.concierge",
  },
  {
    icon: "/images/instagram.svg",
    link: "https://www.instagram.com/maiarc.conciergeagency",
  },
  {
    icon: "/images/whatsapp.svg",
    link: "https://api.whatsapp.com/send?phone=529842028334",
  },
];

type FooterProps = {
  content: string;
};

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="mt-8 flex flex-col items-center pb-12">
      <img src="/images/logo-black-subtitle.png" alt="Maiarc Concierge" className="mb-14 w-32" />

      <p className="mb-2 uppercase"> Ibiza | Tulum | Miami | Punta del Este</p>

      <div className="mb-4 flex flex-col items-center gap-4 uppercase md:flex-row">
        <p>contact@maiarconcierge.com</p> <p>|</p> <p>+52 984 202 8334</p>
      </div>

      <div>
        <Button variant="link" asChild>
          <Link href="/politicas-de-privacidad" className="mb-8 text-xs">
            {content}
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        {social.map((item, index) => (
          <a
            href={item.link}
            key={item.link}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 p-2"
          >
            <img src={item.icon} alt={`icon-${index}`} className="h-full" />
          </a>
        ))}
      </div>
    </footer>
  );
}
