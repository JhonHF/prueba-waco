import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Auth } from "../../../context/auth-context";
import { app } from "../../../firebase/firebase-config";
import { NavBarContainer, NavBarLogo, NavBarItem } from "./styles";

export const NavBar = () => {
  const { usuario: isAuth } = useContext(Auth);
  const history = useHistory();
  return (
    <NavBarContainer>
      <NavBarLogo
        src="https://wacoservices.com/wp-content/uploads/2017/03/LOGO-WACO-EL-LAB-12.png"
        alt="logo de la pagina"
        onClick={()=> history.push("/")}
      />
      {!!isAuth && (
        <>
          <NavBarItem onClick={() => app.auth().signOut()}>
            cerrar sesion
          </NavBarItem>
        </>
      )}
    </NavBarContainer>
  );
};
