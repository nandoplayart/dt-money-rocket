import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { GlobalStyle } from './themes/global'
import Transactions from './pages/transactions'
import { TransactionProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
