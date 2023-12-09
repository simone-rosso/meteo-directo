import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import {
  EuiPage,
  EuiPageBody,
  EuiPageTemplate,
  EuiPageHeaderContent,
  EuiPageHeaderSection,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
  EuiFieldPassword,
  EuiForm,
  EuiSwitch
} from "@elastic/eui";

import "./Auth.css";
import Layout from "../../components/Layout/Layout";
enum CredentialsEnum {
  Email = 'email',
  Password = 'password'
}

interface AuthProps {
  history: any;
}
interface AuthState {
  email: string;
  password: string;
}

const Auth = ({ history }: AuthProps) => {
  const [credentials, setCredentials] = useState<AuthState>({
    [CredentialsEnum.Email]: "",
    [CredentialsEnum.Password]: "",
  });

  const [dual, setDual] = useState(true);

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      const { email, password } = credentials;
      console.log(email, password);
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        history.push("/");
        window.location.href = "/";
      } catch (error) {
        alert(error);
      }
    },
    [history, credentials]
  );


  const { currentUser } = useContext(AuthContext);

  const handleChange = (e: any, key: CredentialsEnum) => {
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
    <Layout goTo="" url="" >
      <EuiForm component="form">
        <EuiFlexGroup style={{ maxWidth: 600 }}>
          <EuiFlexItem>
            <EuiFieldText
              placeholder="your e-mail..."
              onChange={(e) => handleChange(e, CredentialsEnum.Email)}
              value={email}
              compressed
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFieldText
              placeholder="your password..."
              onChange={(e) => handleChange(e, CredentialsEnum.Password)}
              type="password"
              compressed

            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton size="m" onClick={handleSubmit} fill type="submit">Login</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiForm>


      {/*  <EuiPage>
        <EuiPageBody component="div">
          <EuiPageTemplate>
            <EuiPageHeaderContent>
              <EuiPageHeaderSection>
                <EuiTitle>
                  <h2>
                    Log in
                  </h2>
                </EuiTitle>
              </EuiPageHeaderSection>
            </EuiPageHeaderContent>
            <EuiForm component="form">
              <EuiFlexGroup
                style={{ maxWidth: 600 }}
                gutterSize="s"
                alignItems="center"
                wrap
              >
                <EuiFlexItem>
                  <EuiFormRow label="E-mail">
                    <EuiFieldText
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => handleChange(e, CredentialsEnum.Email)}
                    />
                  </EuiFormRow>
                </EuiFlexItem>

                <EuiFlexItem>
                  <EuiFormRow label="password" itemType="Password">
                    <EuiFieldPassword
                      placeholder="Password..."
                      value={password}
                      onChange={(e) => handleChange(e, CredentialsEnum.Password)}
                      type="dual"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiFormRow hasEmptyLabelSpace>
                    <EuiButton fill onClick={handleSubmit}>
                      Login
                    </EuiButton>
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiForm>
          </EuiPageTemplate>
        </EuiPageBody>
      </EuiPage> */}
    </Layout >
  );
};

export default withRouter(Auth);
