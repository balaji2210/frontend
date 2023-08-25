import MuiCard from "@mui/material/Card";

import styled from "styled-components";

const StyledCard = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  width: 100%;

  border-radius: 0.75rem !important;
  border: 0.13rem solid
    ${({ theme, border }) => (border ? theme.colors.neutral50 : "unset")};
  background-color: ${({ theme }) => theme.colors.white} !important;
  box-shadow: ${({ noShadow, theme }) =>
    noShadow ? "initial" : theme.shadows.shadow1} !important;

  &:hover {
    cursor: ${({ noHoverPointer }) =>
      noHoverPointer ? null : "pointer"} !important;
    box-shadow: ${({ noHoverShadow, theme }) =>
      noHoverShadow ? theme.shadows.shadow1 : theme.shadows.shadow3} !important;
  }
`;

const Card = ({
  noShadow = false,
  noHoverShadow = false,
  noHoverPointer = false,
  ...props
}) => {
  return (
    <StyledCard
      {...props}
      elevation={0}
      noHoverPointer={noHoverPointer}
      noShadow={noShadow}
      noHoverShadow={noHoverShadow}
    />
  );
};

export default Card;
