import "./footbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Footbar() {
    return (
        <div className="footbar">
            <div className="image">
                <div className="logo">
                    <a href="https://forms.gle/h6qAFNfrv9ePnENBA">
                        <img src="assets/logo.png" alt="UniCEUB" />
                    </a>
                </div>
                <div className="social">

                    <a href="https://www.facebook.com/prof.aderbal">
                        <FontAwesomeIcon className="social-icon" icon={faFacebook} color="white" />
                    </a>
                    <a href="https://twitter.com/aderbalbotelho">
                        <FontAwesomeIcon className="social-icon" icon={faTwitter} color="white" />
                    </a>
                    <a href="https://www.linkedin.com/in/aderbalbotelho/">
                        <FontAwesomeIcon className="social-icon" icon={faLinkedin} color="white" />
                    </a>
                    <a href="hhttps://www.instagram.com/aderbalbotelho/">
                        <FontAwesomeIcon className="social-icon" icon={faInstagram} color="white" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCmH7uiBtICUMmAKUG1ipt6Q">
                        <FontAwesomeIcon className="social-icon" icon={faYoutube} color="white" />
                    </a>
                </div>
            </div>
            <div className="text">
                <div className="left">
                    <h2>Projetos</h2>
                    <div className="bar"></div>
                    <a href="https://www.ceubos.com.br" target="_blank" rel="noreferrer">CeubOS</a>
                    <a href="https://ctf.ceubos.com.br" target="_blank" rel="noreferrer">Competições CTF</a>
                    <a href="https://boca.ceubos.com.br/boca" target="_blank" rel="noreferrer">Treino ICPC</a>
                    <a href="https://ia.ceubos.com.br" target="_blank" rel="noreferrer">Turma IA</a>
                    <a href="https://jenkins.ceubos.com.br/" target="_blank" rel="noreferrer">Automatizador de processos</a>
                    <a href="https://koop.ceubos.com.br/" target="_blank" rel="noreferrer">Projetos colaborativos</a>
                    <a href="https://jupyter.ceubos.com.br/" target="_blank" rel="noreferrer">Jupyter Notebook</a>
                </div>
                <div className="center">

                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
