import { useMediaQuery } from "usehooks-ts";

export default function useDesktop() {
  return useMediaQuery("(min-width: 768px)");
}
