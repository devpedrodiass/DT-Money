import styled, { css } from 'styled-components';

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  overflow-x: auto;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  /* width */
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${props => props.theme['gray-900']};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme['green-500']};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme['gray-300']};
    
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
    background: ${props.theme['green-700']}
  `}

`