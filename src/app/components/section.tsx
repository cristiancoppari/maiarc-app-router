import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  text?: string;
  children?: ReactNode;
  classes?: string;
  noPadding?: boolean;
  id?: string;
  style?: React.CSSProperties | undefined;
};

const Section = ({ id, title, text, children, classes, noPadding }: SectionProps) => {
  return (
    <section
      className={cn(!noPadding && `px-8 py-12 lg:py-24`, `scroll-m-32 text-center ${!!classes ? classes : ""}`)}
      id={id || ""}
    >
      <div className="mb-10">
        {!!title && (
          <h2 className="h2 mx-auto mb-8 flex items-center justify-center gap-2 uppercase before:block before:h-0.5 before:w-8 before:bg-black before:content-[''] after:ml-0.5 after:block after:h-0.5 after:w-8 after:bg-black after:content-[''] md:w-11/12">
            {title}
          </h2>
        )}

        {!!text && (
          <div className="p mx-auto md:w-2/3">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        )}
      </div>

      <>{children}</>
    </section>
  );
};

export default Section;
