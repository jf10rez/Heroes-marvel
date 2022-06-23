import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";

export const AppRouter = () => {

  const { user } = useContext(AuthContext)
  
  return (
    <>
      <Routes>
        <Route
          exact
          path="login"
          element={
            <PublicRoute uid={user}>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/*"
          element={
            <PrivateRoute uid={user}>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
