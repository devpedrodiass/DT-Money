import React from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header></Header>
      <Summary></Summary>

      <TransactionsContainer>
        <SearchForm></SearchForm>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              <td>Income</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <PriceHighlight variant="outcome">- R$ 12.000,00</PriceHighlight>
              <td>Outcome</td>
              <td>15/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
