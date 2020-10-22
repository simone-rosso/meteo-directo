import React, { useEffect, useState } from "react";
import { EuiComboBox, EuiComboBoxOptionOption } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { getProvinces } from "../../components/services/provinces";
import { API_URI } from "../../utils/costants";
import ComboboxHomepage from "../../components/ComboboxHomepage/ComboboxHomepage";

const Homepage = () => {
  const [options, setOptions] = useState<EuiComboBoxOptionOption[]>([]);

  useEffect(() => {
    getProvinces(API_URI)
      .then((res) => {
        if (res) setOptions(res);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="homepage-container">
      <h2 className="homepage-title">Homepage</h2>
      <ComboboxHomepage options={options} />
    </div>
  );
};

export default Homepage;
