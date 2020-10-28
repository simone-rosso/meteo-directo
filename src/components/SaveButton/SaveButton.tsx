import React, { useState } from "react";
import { EuiButton, EuiFlexItem, EuiIcon } from "@elastic/eui";

import "./SaveButton.css";

import app from "../../firebase";

export interface SaveButtonProps {
  city: string;
  sky: string;
  temperature: string;
}

const SaveButton = ({ city, sky, temperature }: SaveButtonProps) => {
  const [callout, setCallout] = useState<"success" | "danger">();

  const onCreate = () => {
    const data = { city, sky, temperature };
    // To test the alert
    const random = Math.random() > 0.5;

    random
      ? app
          .firestore()
          .collection("cities")
          .add(data)
          .then(() => setCallout("success"))
          .catch(() => setCallout("danger"))
      : setCallout("danger");

    setTimeout(() => setCallout(undefined), 5000);
  };

  return (
    <>
      <EuiFlexItem grow={false}>
        <EuiButton
          iconSide="right"
          iconType="pin"
          size="s"
          fill
          onClick={onCreate}
          className="save-button"
        >
          Guarda {city} en tu colección
        </EuiButton>
      </EuiFlexItem>
      {callout === "success" && (
        <div className="alert alert-success">
          <p>
            <EuiIcon type="checkInCircleFilled" className="paragraph" />
            La ciudad se ha guardado en tu lista!!
          </p>
        </div>
      )}
      {callout === "danger" && (
        <div className="alert alert-danger">
          <p>
            <EuiIcon type="alert" className="paragraph" />
            Hubo un error...
          </p>
        </div>
      )}
    </>
  );
};

export default SaveButton;
