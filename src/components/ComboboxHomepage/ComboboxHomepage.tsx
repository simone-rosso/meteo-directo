import React, { useState } from "react";
import { EuiComboBox, EuiComboBoxOptionOption } from "@elastic/eui";
import "./ComboboxHomepage.css";

interface ComboboxHomepage {
  options: EuiComboBoxOptionOption[];
  onSelectedOption: (city: string) => void;
}

const ComboboxHomepage = ({ options, onSelectedOption }: ComboboxHomepage) => {
  const [selectedOption, setSelected] = useState<EuiComboBoxOptionOption[]>();

  const onChange = (selectedOption: EuiComboBoxOptionOption[]) => {
    setSelected(selectedOption);
    if (selectedOption && selectedOption.length)
      onSelectedOption(selectedOption[0].label);
  };

  return (
    <EuiComboBox
      placeholder="Select a single option"
      singleSelection={{ asPlainText: true }}
      selectedOptions={selectedOption}
      options={options}
      onChange={onChange}
    />
  );
};

export default ComboboxHomepage;
