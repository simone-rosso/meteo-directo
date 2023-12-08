import React, { useEffect, useState } from "react";
import { EuiLoadingChart } from "@elastic/eui";
import app from "../../firebase";
import { LoaderSize } from "../../components/Loader/Loader";

export const AuthContext = React.createContext();
export const UserContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await app.firestore().collection('usersData').get();
        console.log(snapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setPending(false);
      }
    };

    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      fetchData(); 
    });

    return () => unsubscribe(); 

  }, []);

  if (pending) {
    return <EuiLoadingChart size={LoaderSize.Xl} />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
