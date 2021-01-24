import type React from "react";

export const Link = ({ children }: { children: React.ReactNode }) => (
  <a className="hover:underline items-center flex">{children}</a>
);
