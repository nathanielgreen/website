import type React from "react";

export const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="mx-4 text-lg">{children}</li>
);
