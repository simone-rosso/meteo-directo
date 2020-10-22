import React from "react";
/* import AppContext from "./store/AppContext"; */
import "./App.css";
import Layout from "./components/Layout/Layout";
import RoutesProvider from "./routes/routes";

export default function App() {
  return (
    <Layout>
      <RoutesProvider />
    </Layout>
  );
}
