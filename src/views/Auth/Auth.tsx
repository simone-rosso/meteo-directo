import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
  EuiFieldPassword,
  EuiForm,
  EuiTextColor,
} from "@elastic/eui";

import "./Auth.css";
import Layout from "../../components/Layout/Layout";

interface AuthProps {
  history: any;
}
interface AuthState {
  email: string;
  password: string;
}

type Credentials = "email" | "password";

const Auth = ({ history }: AuthProps) => {
  const [credentials, setCredentials] = useState<AuthState>({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      const { email, password } = credentials;
      console.log(email, password);
      try {
        history.location.pathname === "/signup"
          ? await app.auth().createUserWithEmailAndPassword(email, password)
          : await app.auth().signInWithEmailAndPassword(email, password);
        history.push("/");
        window.location.href = "/";
      } catch (error) {
        alert(error);
      }
    },
    [history, credentials]
  );

  const { currentUser } = useContext(AuthContext);

  const handleChange = (e: any, key: Credentials) => {
    setCredentials({
      ...credentials,
      [key]: e.target.value,
    });
  };

  if (currentUser) {
    return <Redirect to={"/"} />;
  }

  const { email, password } = credentials;

  return (
    <Layout goTo="" url="">
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>
                  {history.location.pathname === "/signup"
                    ? "Signup"
                    : "Log in"}
                </h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <EuiForm component="form">
              <EuiFlexGroup style={{ maxWidth: 600 }}>
                <EuiFlexItem>
                  <EuiFormRow label="E-mail">
                    <EuiFieldText
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </EuiFormRow>
                </EuiFlexItem>

                <EuiFlexItem>
                  <EuiFormRow label="password" itemType="Password">
                    <EuiFieldPassword
                      placeholder="Password..."
                      value={password}
                      onChange={(e) => handleChange(e, "password")}
                      type="dual"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiFormRow hasEmptyLabelSpace>
                    <EuiButton onClick={handleSubmit}>
                      {history.location.pathname === "/signup"
                        ? "Signup"
                        : "Login"}
                    </EuiButton>
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiForm>
            <p className="help-text">
              <EuiTextColor color="secondary">
                {" "}
                {history.location.pathname === "/signup" ? (
                  <>
                    Ya tienes una cuenta? <a href={"/login"}>Logueate</a>
                  </>
                ) : (
                  <>
                    Todavia no tienes una cuenta?{" "}
                    <a href={"/signup"}>Registrate</a>
                  </>
                )}
              </EuiTextColor>
            </p>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
    </Layout>
  );
};

export default withRouter(Auth);
