import styled from 'styled-components';

export const PaginationContainer = styled.div`
margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;


export const NumberDisplay = styled.span`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 6px;
  border: 0;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme['white']};
`

export const ChangePageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  border: 0;
  background: transparent;
  color: ${props => props.theme['gray-300']};
  cursor: pointer;
  border-radius: 6px;

  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props => props.theme['gray-700']};
  }
`