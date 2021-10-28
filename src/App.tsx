import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from "react-modal"

import { Dashboard } from './components/Dashboard/index';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root")

export function App() {
  const [isNewtransactionModalOpen, setIsNewtransactionModalOpen] = useState(false)

    function handleOpenNewtransactionModal(){
        setIsNewtransactionModalOpen(true)
    }

    function handleCloseNewtransactionModal(){
        setIsNewtransactionModalOpen(false)
    }

  return (
    <>
      <Header onOpenNewTrasactionModal={handleOpenNewtransactionModal}/>
      <Dashboard />
      
      <NewTransactionModal isOpen={isNewtransactionModalOpen} onRequestClose={handleCloseNewtransactionModal}></NewTransactionModal>
      <GlobalStyle />
    </>
  );
}


