import React, { useEffect, useState } from "react";
import { EuiCard, EuiComboBoxOptionOption } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { getTowns } from "../../components/services/apiCalls";
import { API_URI } from "../../utils/costants";
import ComboboxHomepage from "../../components/ComboboxHomepage/ComboboxHomepage";
import { town } from "../../models/towns";

interface APIFields {
  label: string;
  CODIGOINE: string;
  CODPROV: string;
}

const Homepage = () => {
  const [options, setOptions] = useState<EuiComboBoxOptionOption[]>([]);
  const [apiFields, setApiFields] = useState<APIFields[]>();
  const [weather, setWeather] = useState();

  useEffect(() => {
    getTowns(API_URI).then((res: town[]) => {
      setOptions(
        res.map((x: town) => {
          return { label: x.NOMBRE };
        })
      );
      setApiFields(
        res.map((x: town) => {
          return {
            label: x.NOMBRE,
            CODIGOINE: x.CODIGOINE,
            CODPROV: x.CODPROV,
          };
        })
      );
    });
  }, []);

  const onSelectedOption = (city: string) => {
    const foo = apiFields?.find((x) => x.label === city);
    console.log(foo);
  };

  return (
    <div className="homepage-container">
      <h2 className="homepage-title">Homepage</h2>
      <ComboboxHomepage
        options={options}
        onSelectedOption={(value) => onSelectedOption(value)}
      />
      {apiFields && (
        <EuiCard
          textAlign="left"
          title={apiFields[0].label}
          description={apiFields[0].CODIGOINE.slice(0, 5)}
          onClick={() => console.log("clicked")}
        />
      )}
    </div>
  );
};

export default Homepage;
