import styled from "styled-components";
import {desktopWidth, formBackgroundColor, shadow, textColor2, warnColor} from "../../../colors";

export const StyledAuthForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${formBackgroundColor};
  width: 350px;
  box-shadow: 0 7px ${shadow};
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 3rem;

  @media (min-width: ${desktopWidth}) {
    padding: 25px;
    width: 450px;
    margin-bottom: 0;
  }
`

export const StyledTACText = styled.p`
  color: ${textColor2};
  font-size: 10px;
  margin: 15px 0 0;
  text-align: center;
`;

export const StyledTACLink = styled.a`
  color: ${warnColor};
  cursor: pointer;
  font-weight: 600;
`;
