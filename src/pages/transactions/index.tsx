import React, { useContext } from 'react'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles'
import SearchForm from './components/SearchForm'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export default function Transactions() {
  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && <span>- </span>}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
