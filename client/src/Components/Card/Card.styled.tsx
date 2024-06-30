import styled from "styled-components";
import { theme } from "../../theme";

export const CardContainer = styled.div`
  min-height: 350px;
  width: 500px;
  background-color: ${theme.darkGrayishBlue};
  @media (max-width: 500px) {
    min-width: 200px;
    max-width: 90vw;
    min-height: 250px;
  }
`;

export const CardTitle = styled.h2`
  color: ${theme.neonGreen};
  opacity: 1;
  transition: 0.3s;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const CardText = styled.p`
  color: ${theme.lightCyan};
  font-weight: ${theme.fontWeights};
  font-size: ${theme.fontBody};
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const GenBtn = styled.div`
  background-color: ${theme.neonGreen};
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 16px 3px ${theme.neonGreen};
  }
`;
