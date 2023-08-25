import styled from "styled-components";

export const Wrapper = styled.div`
  & .MuiPaper-root {
    width: 40rem !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    gap: 1rem;
    border: 0.1rem solid ${({ theme }) => theme?.colors?.neutral100};
  }

  & [aria-label="btn"] {
    color: ${({ theme }) => theme?.colors?.primary700};
    font-weight: 600;
  }

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    & .MuiPaper-root {
      max-width: 22rem !important;
      width: 100% !important;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 3rem;
      gap: 1rem;
      border: 0.1rem solid ${({ theme }) => theme?.colors?.neutral100};
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  flex-direction: column;
  width: 20rem;

  & > button {
    background-color: ${({ theme }) => theme?.colors?.neutral100};
    color: black;
    font-weight: 600;
  }
  & .MuiButtonBase-root:hover {
    background-color: ${({ theme }) => theme?.colors?.neutral100} !important;
    color: black;
    font-weight: 600;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

export const SubTextWrapper = styled.div`
  width: 20rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

export const VerticalLine = styled.hr`
  height: 1rem;
  width: 0.1rem;
`;
