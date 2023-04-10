import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransaction {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransaction) => Promise<void>
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    try {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })
      setTransactions(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const createTransaction = async (data: CreateTransaction) => {
    const { description, price, category, type } = data
    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((current) => [response.data, ...current])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
