import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-20 pb-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
