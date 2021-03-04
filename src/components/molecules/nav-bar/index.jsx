import React, { useContext } from "react";
import { Auth } from "../../../context/auth-context";
import { app } from "../../../firebase-config";
import { NavBarContainer, NavBarLogo, NavBarItem } from "./styles";

export const NavBar = () => {
  const { usuario: isAuth } = useContext(Auth);

  return (
    <NavBarContainer>
      <NavBarLogo
        src="https://wacoservices.com/wp-content/uploads/2017/03/LOGO-WACO-EL-LAB-12.png"
        alt="logo de la pagina"
      />
      {!!isAuth && <NavBarItem onClick={() => app.auth().signOut()}>cerrar sesion</NavBarItem>}
    </NavBarContainer>
  );
};
