import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0rem;
  grid-row-gap: 0rem;
  position: relative;

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  & > img {
    width: 95%;
    height: 100vh;
  }

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    display: none;
  }
`;

export const CardContainer = styled.div`
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
