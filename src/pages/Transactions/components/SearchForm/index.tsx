import { MagnifyingGlass, Spinner } from "phosphor-react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SearchButton, SearchFormContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import Loading from "../../../../components/Loading";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputsType = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputsType>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputsType) {
    await fetchTransactions(data.query);
    console.log("In", data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search a Transaction"
        {...register("query")}
      />
      <SearchButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loading iconSize={20}></Loading>
        ) : (
          <>
            <MagnifyingGlass size={20}></MagnifyingGlass>
            Search
          </>
        )}
      </SearchButton>
    </SearchFormContainer>
  );
}
