import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  max-width: 75rem;
  width: 75%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    width: 95%;
  }
`;

export const StudentCard = styled.div`
  max-width: 60rem;
  width: 100%;
  background-color: ${({ theme }) => theme?.colors?.neutral100};
  border-radius: 0.3rem;
  padding: 1.5rem;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  & > img {
    border-radius: 50%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    align-items: center;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 85%;

  & > button {
    background-color: ${({ theme }) => theme?.colors?.neutral100};
    color: black;
    width: 15rem;
    margin: auto;
    font-weight: 600;
  }
  & .MuiButtonBase-root:hover {
    background-color: ${({ theme }) => theme?.colors?.neutral100} !important;
    color: black;
    font-weight: 600;
  }

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    width: 100%;
  }
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme?.colors?.neutral100};

  @media ${({ theme }) => theme?.breakpoints?.sm} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const SideWrapper = styled.div``;

export const SideBar = styled.div`
  width: 15rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItem = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme?.colors?.neutral50};

  :hover {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme?.colors?.neutral100};
  }
`;
