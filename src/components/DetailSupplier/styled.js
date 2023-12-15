import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: baseline;
`;

export const Label = styled.label`
  padding: 4px;
  width: 100%;
  @media (min-width: 910px) {
    flex-direction: row;
  }
`;
