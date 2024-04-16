import { Link } from "@/lang/navigation";
import { Button as BaseButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text: string;
  classes?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

type LinkButtonProps = {
  link: string;
} & ButtonProps;

export function LinkButton({ link, text, classes }: LinkButtonProps) {
  return (
    <BaseButton asChild className={cn("my-16 rounded-full px-12 uppercase", classes || "")}>
      <Link href={link}>{text}</Link>
    </BaseButton>
  );
}

export function Button({ text, classes, type }: ButtonProps) {
  return (
    <BaseButton
      type={!!type ? type : "button"}
      className={`block rounded-full px-12 uppercase ${!!classes ? classes : ""}`}
    >
      {text}
    </BaseButton>
  );
}
