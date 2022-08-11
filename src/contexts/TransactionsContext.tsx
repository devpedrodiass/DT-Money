import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

export interface ITransaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface ITransactionsContextType {
  transactions: ITransaction[];
  fetchTransactions: (query?: string, page?: number) => Promise<void>;
  createNewTransaction: (newTransaction: ITransaction) => Promise<void>;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext(
  {} as ITransactionsContextType
);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string, page = 1) => {
    const response = await api.get("transactions", {
      params: {
        q: query,
        _sort: "createdAt",
        _order: "desc",
        _page: page,
        _limit: 3,
      },
    });
    setTransactions(response.data);
  }, []);

  const createNewTransaction = useCallback(
    async ({ category, description, price, type }: ITransaction) => {
      const { data } = await api.post("transactions", {
        category,
        description,
        price,
        type,
        createdAt: new Date().toISOString(),
      });
      setTransactions((oldState) => [data, ...oldState]);
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{
        createNewTransaction,
        fetchTransactions,
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
