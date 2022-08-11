import format from "date-fns/format";
import { CalendarBlank, TagSimple } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  EmptyMessage,
  PriceHighlight,
  TdContainer,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  const { transactions, fetchTransactions } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        transactions: context.transactions,
        fetchTransactions: context.fetchTransactions,
      };
    }
  );

  function changePageNumber(newPageNumber: number) {
    fetchTransactions(undefined, newPageNumber);
  }

  return (
    <div>
      <Header></Header>
      <Summary></Summary>

      <TransactionsContainer>
        <SearchForm></SearchForm>
        <TransactionsTable>
          <tbody>
            {transactions && transactions.length === 0 && (
              <tr>
                <EmptyMessage>Ops! No Results 😢</EmptyMessage>
              </tr>
            )}
            {transactions &&
              transactions.length > 0 &&
              transactions.map(
                ({ category, createdAt, description, id, price, type }) => (
                  <tr key={id}>
                    <TdContainer>
                      <td>{description}</td>
                      <PriceHighlight variant={type}>
                        {type === "outcome" && "- "}
                        {priceFormatter.format(price)}
                      </PriceHighlight>
                    </TdContainer>
                    <TdContainer>
                      <td>
                        <TagSimple size={16}></TagSimple>
                        {category}
                      </td>
                      <td>
                        <CalendarBlank size={16}></CalendarBlank>
                        {dateFormatter.format(new Date(createdAt))}
                      </td>
                    </TdContainer>
                  </tr>
                )
              )}
          </tbody>
        </TransactionsTable>
        <Pagination
          isDisabled={transactions.length === 0}
          changePageNumber={changePageNumber}
        ></Pagination>
      </TransactionsContainer>
    </div>
  );
}
