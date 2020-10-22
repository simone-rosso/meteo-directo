import React, { useState } from "react";
import { EuiComboBox, EuiComboBoxOptionOption } from "@elastic/eui";
import "./ComboboxHomepage.css";

interface ComboboxHomepage {
  options: EuiComboBoxOptionOption[];
}

const ComboboxHomepage = ({ options }: ComboboxHomepage) => {
  const [selectedOptions, setSelected] = useState();

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
  };

  return (
    <EuiComboBox
      placeholder="Select a single option"
      singleSelection={{ asPlainText: true }}
      selectedOptions={selectedOptions}
      options={options}
      onChange={onChange}
    />
  );
};

export default ComboboxHomepage;
