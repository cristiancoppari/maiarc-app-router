import ReactMarkdown from "react-markdown";

type TextWithBackgroundProps = {
  title: string;
  subtitle: string;
  text: string;
  cta?: string;
  bgImage?: string;
};

export default function TextWithBackground({ title, subtitle, text, bgImage }: TextWithBackgroundProps) {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="relative bg-cover bg-center bg-no-repeat">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black"></div>
      <div className="relative">
        <div className="section-padding container flex flex-col items-center gap-4 text-center text-zinc-100">
          <h2 className="h2 mb-8">{title}</h2>
          <h3 className="h3 mb-6">{subtitle}</h3>
          <div className="space-y-2">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
