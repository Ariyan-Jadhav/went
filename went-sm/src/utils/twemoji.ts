import twemoji from "@twemoji/api";

export const parseTwemoji = (element: HTMLElement) => {
  twemoji.parse(element, {
    folder: "svg",
    ext: ".svg",
    base: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/",
    className: "twemoji",
  });
};
