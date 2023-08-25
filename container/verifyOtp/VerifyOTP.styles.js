import styled from "styled-components";

export const VerifyOTPWrapper = styled.div``;

export const VerifyOTPContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  position: relative;

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    display: none;
  }
`;

export const VerifyOTPImageContainer = styled.div`
  & > img {
    width: 95%;
    height: 100vh;
  }

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    display: none;
  }
`;

export const VerifyOTPCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 9.38rem;
  right: 12.5rem;

  @media ${({ theme }) => theme?.breakpoints?.md} {
    right: 2rem;
  }

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    position: static;
    height: 100vh;
  }
`;
