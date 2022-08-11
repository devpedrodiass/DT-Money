import React, { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Loading from "../Loading";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { api } from "../../lib/axios";
import {
  ITransaction,
  TransactionsContext,
} from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormType = z.infer<typeof newTransactionFormSchema>;

export default function NewTransactionModal() {
  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createNewTransaction
  );
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormType>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionFormType) {
    createNewTransaction(data as ITransaction);
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton>
            <X size={24}></X>
          </CloseButton>
          <Dialog.Title>New Transaction</Dialog.Title>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Description"
              required
              {...register("description")}
            />
            <input
              type="number"
              placeholder="Price"
              required
              {...register("price", { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Category"
              required
              {...register("category")}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                const { onChange, value } = field;
                console.log(field);
                return (
                  <TransactionType onValueChange={onChange} value={value}>
                    <TransactionTypeButton value="income" variant="income">
                      <ArrowCircleUp size={24}></ArrowCircleUp>
                      Income
                    </TransactionTypeButton>
                    <TransactionTypeButton value="outcome" variant="outcome">
                      <ArrowCircleDown size={24}></ArrowCircleDown>
                      Outcome
                    </TransactionTypeButton>
                  </TransactionType>
                );
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loading iconSize={20}></Loading> : "Create"}
            </button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  );
}
