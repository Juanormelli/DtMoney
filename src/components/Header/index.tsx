import { useState } from "react"
import logoImg from "../../assets/Logo.png"
import { Container, Content } from "./styles"
import Modal from "react-modal"


interface HeaderProps {
    onOpenNewTrasactionModal: () => void;
}


export function Header({onOpenNewTrasactionModal}:HeaderProps){
    

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dtMoney" />
                <button type="button" onClick={onOpenNewTrasactionModal} > Nova transação</button>


            </Content>
        </Container>
    )
}


