import { cn } from "@/lib/utils";

type ImageTitleProps = {
  image: string;
  title: string;
  subtitle?: string;
  classes?: string;
};

export default function ImageTitle({ image, title, subtitle, classes }: ImageTitleProps) {
  return (
    <div className={cn("shadow-xl", classes)}>
      <img src={image} alt="" className="mx-auto aspect-square w-full object-cover" />

      <div className="p-4 text-center">
        <h3 className="--font-lora font-medium">- {title} -</h3>
        {!!subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
