import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
