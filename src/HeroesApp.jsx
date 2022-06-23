import { useState } from "react";
import { AuthContext } from "./context/authContext";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {

  const [user, setUser] = useState(null)
  
  return (
    <AuthContext.Provider value={ { user, setUser } } >
      <AppRouter />
    </AuthContext.Provider>
  );
};
