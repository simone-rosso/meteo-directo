import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AppContext from "./context/appContext/context";

export default function App() {
  return (
    <Layout>
      <AppContext />
    </Layout>
  );
}
