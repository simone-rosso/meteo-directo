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
        history.push("/");
        window.location.href = "/";
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
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
        todavia no tienes una cuenta? <a href="/signup">Registrate</a>
      </p>
    </div>
  );
};

export default withRouter(Login);
