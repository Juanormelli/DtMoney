import { Container } from "./styles";
import income from "../../assets/Entradas.png"
import Outcome from "../../assets/Saídas.png"
import Total from "../../assets/Total (1).png"


export function Summary(){
    return  (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas" />
                </header>
                <strong>R$1400</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={Outcome} alt="Entradas" />
                </header>
                <strong> -R$1400</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Entradas" />
                </header>
                <strong>R$0</strong>
            </div>
        </Container>
    );
}