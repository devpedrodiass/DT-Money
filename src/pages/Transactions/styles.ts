import styled from 'styled-components';

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  tr {
    display: flex;
    flex-direction: row;
    align-items: center;  
    border-radius: 6px;
    background: ${props => props.theme['gray-700']};
    :not(:first-child) {
      margin-top: 0.5rem;
    }
    div {
      width: 100%;
      td {
        padding: 1.25rem 2rem;
        width: 100%;
      }
    }
  }

  @media (max-width: 600px) {
    tr {
      align-items: flex-start;
      flex-direction: column;
    }
  }

`

export const TdContainer = styled.div`
    display: flex;
    td {
      svg {
          display: none;
        }
    }
    @media (max-width: 600px) {
    &:first-child {
      flex-direction: column !important;
      td:first-child {
        font-size: 1.2rem;
        padding: 1rem 0.5rem 0 1rem;
      }
      td:last-child {
        font-weight: bold;
        padding: 0.8rem 0 1rem 1rem;
      }
    }
    &:last-child {
      flex-direction: row !important;
      justify-content: space-between;
      td {
        padding: 1rem 1rem;
        color: ${props => props.theme['gray-400']};
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        svg {
          display: block;
        }
      }
      td:last-child {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.td<PriceHighlightProps>`
  color: ${props => props.variant === 'income'
    ? props.theme['green-300']
    : props.theme['red-300']};
`

export const EmptyMessage = styled.td`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
`