import React from "react";
import { AuthContext } from "./context/auth-context";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <AuthContext>
      <AppRoutes />
    </AuthContext>
  );
};
