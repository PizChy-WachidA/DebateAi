import React from "react";
import { Navigation } from "@/components/Navbar";

type Child = {
  children: any;
};

function Layout({ children }: Child) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}

export default Layout;
