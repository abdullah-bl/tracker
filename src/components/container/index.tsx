import { ReactHTMLElement } from "react";

export const Container = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className="sm:container mx-auto w-screen h-screen overflow-scroll"
    {...props}
  />
);
