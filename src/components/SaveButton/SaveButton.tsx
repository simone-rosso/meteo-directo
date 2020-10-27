import React from "react";
import { EuiButton, EuiFlexItem } from "@elastic/eui";

import "./SaveButton.css";

import app from "../../firebase";

interface SaveButtonProps {
  city: string;
}

const SaveButton = ({ city }: SaveButtonProps) => {
  const onCreate = () => {
    app.firestore().settings({ experimentalForceLongPolling: true });
    app
      .firestore()
      .collection("cities")
      .add({ name: "hardcoded" })
      .then((ref) => {
        console.log("Added document with ID: ", ref.id);
      });
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
