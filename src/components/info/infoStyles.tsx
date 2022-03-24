import styled from "styled-components";
import {desktopWidth, textColor, textColor1} from "../../colors";

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${textColor};
  margin: 3rem 0;
  text-align: center;

  @media(min-width:${desktopWidth}){
    margin-right: 6rem;
    margin-bottom: 0;
    text-align: left;
    width: unset;
  }
`;

export const InfoTitle = styled.h1`
  margin: 1rem 0;
  line-height: 1.2;
  font-weight: 600;
  font-size: 32px;
  width: 350px;
  
  @media(min-width:${desktopWidth}){
    font-weight: 700;
    font-size: 48px;
    width: 100%;
  }`;

export const InfoDescription = styled.p`
  line-height: 1.5;
  color: ${textColor1};
  width: 350px;

  @media(min-width:${desktopWidth}){
    width: 100%;
  }
`
