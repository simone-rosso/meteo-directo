import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
  goTo: string;
  url: string;
}

const Layout = ({ children, goTo, url }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-container">
        {children}
      </main>
      <Footer goTo={goTo} url={url} />
    </div>
  );
};

export default Layout;
