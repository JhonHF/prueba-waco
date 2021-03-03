import React from "react";
import { NavBarContainer, NavBarLogo, NavBarItem } from "./styles";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLogo
        src="https://wacoservices.com/wp-content/uploads/2017/03/LOGO-WACO-EL-LAB-12.png"
        alt="logo de la pagina"
      />
      <NavBarItem>Item</NavBarItem>
    </NavBarContainer>
  );
};
