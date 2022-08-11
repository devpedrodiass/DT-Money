import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export default function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton>
            <X size={24}></X>
          </CloseButton>
          <Dialog.Title>New Transaction</Dialog.Title>
          <form action="">
            <input type="text" placeholder="Description" required />
            <input type="number" placeholder="Price" required />
            <input type="text" placeholder="Category" required />
            <TransactionType>
              <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24}></ArrowCircleUp>
                Income
              </TransactionTypeButton>
              <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24}></ArrowCircleDown>
                Outcome
              </TransactionTypeButton>
            </TransactionType>
            <button type="submit">Create</button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
}
