import { useEffect, useRef } from "react";
import { parseTwemoji } from "@/utils/twemoji";

export const useTwemoji = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) parseTwemoji(ref.current);
  });

  return ref;
};
