import React, { useState } from "react";
import {
  EuiListGroup,
  EuiListGroupItemProps,
  EuiLoadingChart,
} from "@elastic/eui";

import Layout from "../../components/Layout/Layout";
import app from "../../firebase";

import "./Saved.css";
import { SaveButtonProps } from "../../components/SaveButton/SaveButton";

const Saved = () => {
  const [cities, setCities] = useState<SaveButtonProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = app.firestore();
      const data = await db.collection("cities").get();
      setCities(
        data.docs.map((x: any) => {
          const { city, temperature, sky } = x.Df.sn.proto.mapValue.fields;
          return {
            city: city.stringValue,
            temperature: temperature.stringValue,
            sky: sky.stringValue,
          };
        })
      );
    };
    fetchData();
    setLoading(false);
  }, []);

  const listObject: EuiListGroupItemProps = {
    label: "",
    size: "m",
    iconType: "starFilledSpace",
  };

  const citiesList: EuiListGroupItemProps[] = cities.map((city) => {
    return { ...listObject, label: city.city };
  });

  return (
    <Layout goTo="homepage" url={"/"}>
      {loading ? (
        <div className="spinner-container">
          <EuiLoadingChart size="xl" />
        </div>
      ) : (
        <EuiListGroup listItems={citiesList} className="cities-list" />
      )}
    </Layout>
  );
};

export default Saved;
