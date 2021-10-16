import "./subscription.scss"
import Footbar from "../../footbar/Footbar"

export default function Subscription() {
    return (
        <div className="subscription">
            <div className="title">
                <h1> Professores Envolvidos</h1>
            </div>
            <div className="container">
                <a href="https://wa.me/5561982104404" target="_blank " rel="noreferrer">
                    <div className="item">
                        Aderbal Botelho Leite Neto
                    </div>
                </a>
                {/* <div className="item">
                    Antonio Barbosa Jr.
                </div>
                <div className="item">
                    Gilberto de Oliveira Hiragi
                </div>
                <div className="item">
                    Rogerio Alves da Conceicao
                </div>
                <div className="item">
                    Ebenezer Rangel Botelho
                </div> */}
            </div>
            <Footbar />
        </div>
    )
}
