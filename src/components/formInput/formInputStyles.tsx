import styled from "styled-components";
import {desktopWidth, focusColor, inputBorderColor, textColor3, warnColor} from "../../colors";
import {StyledInputProps} from "./FormInput";

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: 10px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.error ? warnColor : inputBorderColor};
  outline: none;
  color: ${(props) => props.error ? warnColor : textColor3};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  
  &:focus {
    border-color: ${focusColor};
  }
  
  @media(min-width:${desktopWidth}) {
    padding: 10px 25px
  }
`;

export const StyledWarningIcon = styled.img`
  position: absolute;
  width: 20px;
  top: 10px;
  right: 10px;
`;

export const StyledWarning = styled.p`
  margin: 1px 0;
  color: ${warnColor};
  font-size: 10px;
  height: 10px;
  font-style: italic;
  text-align: right;
`;
