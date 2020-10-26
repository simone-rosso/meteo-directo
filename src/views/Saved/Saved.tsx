import React, { useState } from "react";
import { EuiListGroup, EuiListGroupItemProps } from "@elastic/eui";

import Layout from "../../components/Layout/Layout";
import app from "../../firebase";

import "./Saved.css";

const Saved = () => {
  const [cities, setCities] = useState<any[]>([
    "Barcelona",
    "Madrid",
    "Malaga",
    "Bilbao",
    "Sevilla",
    "Vigo",
  ]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = app.firestore();
      const data = await db.collection("cities").get();
      console.log(data.docs);
      setCities(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const listObject: EuiListGroupItemProps = {
    label: "",
    size: "l",
    iconType: "annotation",
  };

  const citiesList: EuiListGroupItemProps[] = cities.map((city) => {
    return { ...listObject, label: city };
  });

  return (
    <Layout goTo="homepage" url={process.env.PUBLIC_URL + "/"}>
      <EuiListGroup listItems={citiesList} className="cities-list" />
    </Layout>
  );
};

export default Saved;
