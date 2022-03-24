import styled from "styled-components";
import {desktopWidth} from "../../colors";

export const AuthBlockContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width:${desktopWidth}){
    justify-content: center;
  }
`
