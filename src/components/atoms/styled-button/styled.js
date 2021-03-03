import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ color }) => {
    if (color === "danger") {
      return "#DE545E";
    } else if (color === "info") {
      return "#64FA5F";
    } else if (color === "warning") {
      return "#F5B169";
    }
  }};
  border-radius: 5px;
  padding: 0.6rem;
  text-transform: uppercase;
  font-weight: bold;
`;
