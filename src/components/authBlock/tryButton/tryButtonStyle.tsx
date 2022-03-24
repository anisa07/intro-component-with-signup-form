import styled from "styled-components";
import {buttonBackgroundColor, desktopWidth, shadow, textColor} from "../../../colors";

export const TryButtonStyled = styled.button`
  background-color: ${buttonBackgroundColor};
  color: ${textColor};
  border-radius: 5px;
  font-weight: lighter;
  border: none;
  outline: none;
  width: 350px;
  box-shadow: 0 7px ${shadow};
  padding: 15px 100px;
  line-height: 1.6;
  margin-bottom: 2rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  
  @media(min-width:${desktopWidth}){
    width: 450px;
    padding: 15px;
  }
`
export const BoldText = styled.span`
  font-weight: 600;
  color: ${textColor};
`
