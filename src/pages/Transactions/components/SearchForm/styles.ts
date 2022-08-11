import styled, { css } from "styled-components";


export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  
  input {
    flex: 1;
    border-radius: 6px ;
    border: 0;
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;
    
    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }

  }

  @media (max-width: 600px) {
    flex-direction: column;
}
`

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    

    border: 0;
    padding: 1rem;

    background: transparent;
    border: 1px solid ${props => props.theme["green-300"]};
    color: ${props => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;

    transition: 
      background-color 0.2s, 
      color 0.2s, 
      border-color 0.2s;

      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

    &:not(:disabled):hover {
      background: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme["white"]};
  }

    @media (max-width: 600px) {
      justify-content: center;
    }

  `