import React, { useEffect, useState } from "react";
import {
  EuiCard,
  EuiComboBoxOptionOption,
  EuiLoadingChart,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { getTowns, getWeather } from "../../services/apiCalls";
import { API_URI } from "../../utils/costants";
import ComboboxHomepage from "../../components/ComboboxHomepage/ComboboxHomepage";
import { APICallFields, town, TownWeather } from "../../models/towns";
import CardWeather from "../../components/CardWeather/CardWeather";

import "./Homepage.css";

const Homepage = () => {
  const [options, setOptions] = useState<EuiComboBoxOptionOption[]>([]);
  const [apiCallFields, setApiCallFields] = useState<APICallFields[]>();
  const [selectedTown, setSelectedTown] = useState<TownWeather>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getTowns(API_URI).then((res: town[]) => {
      setOptions(
        res.map((x: town) => {
          return { label: x.NOMBRE };
        })
      );
      setApiCallFields(
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

  const onSelectedOption = (townSelected: string) => {
    setSelectedTown(undefined);
    setLoading(true);
    const townToApiCall = apiCallFields?.find(
      (x: APICallFields) => x.label === townSelected
    );
    if (townToApiCall !== undefined)
      getWeather(
        API_URI,
        townToApiCall.CODPROV,
        townToApiCall.CODIGOINE.slice(0, 5)
      )
        .then((weather) => {
          setLoading(false);
          setSelectedTown(weather);
        })
        .catch((err) => console.warn(err));
  };

  return (
    <div className="homepage-container">
      <ComboboxHomepage
        options={options}
        onSelectedOption={(value) => onSelectedOption(value)}
      />
      {loading && !selectedTown && (
        <div className="spinner-container">
          {" "}
          <EuiLoadingChart size="xl" />
        </div>
      )}
      {selectedTown && !loading && <CardWeather townWeather={selectedTown} />}
    </div>
  );
};

export default Homepage;
