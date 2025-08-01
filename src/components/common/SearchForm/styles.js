import styled from "styled-components";

export const SearchFormContainer = styled.form`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 1rem;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #495057;
  font-size: 0.875rem;
`;

export const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.75rem;
  position: absolute;
  bottom: -20px;
  left: 0;
  padding: 2px 6px;
  z-index: 10;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const SearchButton = styled.button`
  width: 350px;
  background-color: #007bff;
  border-color: #007bff;
`;

export const ClearButton = styled.button`
  width: 350px;
  background-color: #6c757d;
  border-color: #6c757d;
`;
