import React, { useState } from "react";
import { EuiListGroup, EuiListGroupItemProps } from "@elastic/eui";

import Layout from "../../components/Layout/Layout";
import app from "../../firebase";

import "./Saved.css";

const Saved = () => {
  const [cities, setCities] = useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = app.firestore();
      const data = await db.collection("cities").get();
      setCities(
        data.docs.map((x: any) => {
          const {
            city,
            /*             temperature,
            sky,
            date, */
          } = x.Df.sn.proto.mapValue.fields;
          return city.stringValue;
          /*             temperature: temperature.stringValue,
            sky: sky.stringValue,
            date: date.timestampValue, */
        })
      );
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
    <Layout goTo="homepage" url={"/"}>
      <EuiListGroup listItems={citiesList} className="cities-list" />
    </Layout>
  );
};

export default Saved;
