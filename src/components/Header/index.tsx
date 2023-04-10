import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'
import NewTransactionModal from '../NewTransactionModal'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
