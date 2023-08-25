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

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    & .MuiPaper-root {
      max-width: 20rem !important;
      width: 100% !important;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 2rem;
      gap: 1rem;
      border: 0.1rem solid ${({ theme }) => theme?.colors?.neutral100};
    }
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabLine = styled.div`
  height: 0.3rem;
  width: 100% !important;
  border-radius: 0.2rem;
  background-color: ${({ theme, show }) =>
    show ? theme?.colors?.primary600 : theme?.colors?.primary400};
`;

export const FormWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
  flex-direction: column;
  width: 20rem;

  & button {
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
