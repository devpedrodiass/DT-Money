import { CaretLeft, CaretRight } from "phosphor-react";
import React, { useState } from "react";
import { ChangePageButton, NumberDisplay, PaginationContainer } from "./styles";

interface IPaginationProps {
  changePageNumber: (pageNumber: number) => void;
  isDisabled: boolean;
}

export default function Pagination({
  changePageNumber,
  isDisabled,
}: IPaginationProps) {
  const [pageNumber, setPageNumber] = useState(1);

  function handleChangePageNumber(type: "<" | ">") {
    let newPageNumber = pageNumber;
    if (type === "<") {
      newPageNumber = pageNumber !== 1 ? (newPageNumber -= 1) : newPageNumber;
    } else {
      newPageNumber = newPageNumber += 1;
    }
    setPageNumber(newPageNumber);
    changePageNumber(newPageNumber);
  }

  return (
    <PaginationContainer>
      <ChangePageButton
        type="button"
        onClick={() => handleChangePageNumber("<")}
      >
        <CaretLeft size={24}></CaretLeft>
      </ChangePageButton>
      <NumberDisplay>{pageNumber}</NumberDisplay>
      <ChangePageButton
        type="button"
        disabled={isDisabled}
        onClick={() => handleChangePageNumber(">")}
      >
        <CaretRight size={24}></CaretRight>
      </ChangePageButton>
    </PaginationContainer>
  );
}
