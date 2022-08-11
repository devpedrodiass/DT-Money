import React from "react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "../../assets/logo.svg";
import NewTransactionModal from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal></NewTransactionModal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
