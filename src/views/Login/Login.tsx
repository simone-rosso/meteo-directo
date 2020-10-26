import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../context/AuthContext/AuthContext";

interface LoginProps {
  history: any;
}

const Login = ({ history }: LoginProps) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push(process.env.PUBLIC_URL + "/");
        window.location.href = process.env.PUBLIC_URL + "/";
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to={process.env.PUBLIC_URL + "/"} />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <p>
        {" "}
        todavia no tienes una cuenta?{" "}
        <a href={process.env.PUBLIC_URL + "/signup"}>Registrate</a>
      </p>
    </div>
  );
};

export default withRouter(Login);
