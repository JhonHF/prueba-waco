import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  background-color: red;
  height: 5rem;
  background-color: #7f3fbf;
  padding: 10px;
`;

export const NavBarLogo = styled.img`
  max-height: max-content;
`;

export const NavBarItem = styled.div`
  align-self: center;
  border: 2px solid white;
  margin-left: auto;
  color: white;
  padding: 0.5rem;
  margin-right: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;
