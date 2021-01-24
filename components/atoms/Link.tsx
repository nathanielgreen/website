import type React from "react";

export type LinkProps = {
  children: React.ReactNode;
  path: string;
};
export const Link = ({ children, path }: LinkProps) => (
  <a className="hover:underline items-center flex" href={path}>
    {children}
  </a>
);
