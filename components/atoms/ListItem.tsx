import type React from "react";

export const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="px-4 text-lg">{children}</li>
);
