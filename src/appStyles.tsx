import styled from "styled-components";
import background from "./images/bg-intro-desktop.png"
import mobileBackground from "./images/bg-intro-mobile.png"
import {backgroundColor, desktopWidth} from "./colors";

export const AppContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-image: url(${mobileBackground});
  padding: 1rem;
  background-color: ${backgroundColor};

  @media(min-width:${desktopWidth}){
    flex-direction: row;
    background-image: url(${background});
    padding: 0 8rem;
    height: 100vh;
  }
`;
