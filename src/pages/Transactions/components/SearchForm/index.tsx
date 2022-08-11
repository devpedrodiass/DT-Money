import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search a Transaction" />
      <button type="submit">
        <MagnifyingGlass size={20}></MagnifyingGlass>
        Search
      </button>
    </SearchFormContainer>
  );
}
