import { createContext, useEffect, useState } from "react";
import netlifyIdentify from "netlify-identity-widget";
const AuthContext = createContext({
  user: null,
  login: () => {},
  logOut: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    netlifyIdentify.init();
  }, []);
  const login = () => {
    netlifyIdentify.open();
  };
  const context = { user, login };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
