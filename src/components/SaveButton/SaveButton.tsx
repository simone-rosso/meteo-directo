import React from "react";
import { EuiButton, EuiFlexItem } from "@elastic/eui";

import "./SaveButton.css";

import app from "../../firebase";

export interface SaveButtonProps {
  city: string;
  sky: string;
  temperature: string;
}

const SaveButton = ({ city, sky, temperature }: SaveButtonProps) => {
  const onCreate = () => {
    const data = { city, sky, temperature };
    app.firestore().collection("cities").add(data);
  };

  return (
    <EuiFlexItem grow={false}>
      <EuiButton
        iconSide="right"
        iconType="pin"
        size="s"
        fill
        onClick={onCreate}
        className="save-button"
      >
        Guarda {city} en tu coleccion
      </EuiButton>
    </EuiFlexItem>
  );
};

export default SaveButton;
