import { EuiComboBox, EuiComboBoxOptionOption } from "@elastic/eui";
import React, { useState } from "react";
import "@elastic/eui/dist/eui_theme_light.css";

const options: EuiComboBoxOptionOption[] = [
  {
    label: "Enceladus",
  },
  {
    label: "Mimas",
  },
  {
    label: "Dione",
  },
  {
    label: "Iapetus",
  },
  {
    label: "Phoebe",
  },
  {
    label: "Rhea",
  },
  {
    label:
      "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
  },
  {
    label: "Tethys",
  },
  {
    label: "Hyperion",
  },
];

const Homepage = () => {
  const [selectedOptions, setSelected] = useState<EuiComboBoxOptionOption>(options[2]);

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
  };

  return (
    <div>
      Homepage
      <EuiComboBox
        placeholder="Select a single option"
        singleSelection={{ asPlainText: true }}
        /* selectedOptions={selectedOptions} */
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default Homepage;
