import React, { useCallback } from "react";
import { EuiButton, EuiFlexItem } from "@elastic/eui";

import history from "../../utils/history";

import app from "../../firebase";

const SaveButton = () => {
  const handleLogout = useCallback(async (event:any) => {
    event.preventDefault();
    try {
      await app.auth().signOut();
      window.location.href = "/login";
      history.push("/login");
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <EuiFlexItem grow={false}>
      <EuiButton
        iconSide="right"
        iconType="exit"
        size="s"
        fill
        onClick={handleLogout}
        className="logout-button"
      >
        Logout
      </EuiButton>
    </EuiFlexItem>
  );
};

export default SaveButton;
