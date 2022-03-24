import styled from "styled-components";
import {buttonBackgroundColor1, shadow, textColor} from "../../../colors";

export const StyledAuthButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: ${textColor};
  background-color: ${buttonBackgroundColor1};
  text-transform: uppercase;
  box-shadow: 0 3px ${shadow};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;
