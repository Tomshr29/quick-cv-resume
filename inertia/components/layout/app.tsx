import type { ReactNode } from "react";
import Nav from "~/partials/nav";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav />
      <main className="">{children}</main>
    </div>
  );
}
