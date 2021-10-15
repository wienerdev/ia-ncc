import "./concepts.scss"
import Typography from '@mui/material/Typography';

export default function Concepts() {
    return (
        <div className="objectives" id="concepts">
            <div className="inicio">
                <h1>
                    O que é essa pesquisa e como começei a desenvolvê-la?
                </h1>
                <Typography variant="h6" class="typography">
                    A ideia por trás desse projeto de detecção da covid através da visão
                    computacional veio depois de uma aula com um professor muito fera, no início
                    da pandemia no ano de 2020 ele me dava aula de desenvolvimento web e
                    ministrando essa aula ele disse para a turma que em alguns países já estavam
                    identificando a covid-19 através do raio-x do pulmão usando python, eu fiquei
                    tão fascinado que fui pesquisar sobre. Essa aula mudou minha forma de pensar.
                </Typography><br />
                <Typography variant="h6" class="typography">
                    Comecei a pesquisa 3 meses após essa aula com um desejo de descobrir como
                    esses países estavam tão avançados e porque o Brasil estava ficando para trás,
                    fui atrás de artigos científicos sobre identificação de covid e achei um site
                    chamado Kaggle.
                </Typography> <br />
                <Typography variant="h6" class="typography">
                    Foi então que eu descobri artigos sobre inteligência artificial e processamento
                    de imagens usando Python, esses artigos despertaram em mim uma vontade de
                    aprender e ser bom nisso.
                </Typography>
            </div>
            <div className="inicio">
                <h1>
                    Linguagem de programação Python
                </h1>
                <Typography variant="h6" class="typography">
                    Sanner et al. (1999) mencionou que python é um interpretado, orientado a
                    objetos e interativo bem como uma linguagem de programação de propósito
                    geral simples, mas poderosa. Ele também disse que vários tipos de dados de alto
                    nível são fornecidos por Python.
                    Embora existam alguns outros objetos que podem ser encontrados em Python
                    também. Além disso, o python tem vários tipos de instruções que são simples
                    por natureza (van Rossum &amp; de Boer, 1991).

                </Typography>
            </div>

            <div className="inicio">
                <h1>
                    Inteligência Artificial
                </h1>
                <Typography variant="h6" class="typography">
                    Os pesquisadores estão sempre tentando fazer a máquina pensar por si mesmo
                    com a ajuda da IA. AI é usado para robótica, que é uma de suas subáreas. A IA
                    também pode ser usada nas áreas médicas, desde que Charniak (1985)
                    mencionou que AI é o estudo das faculdades cognitivas usando modelos. AI
                    refere-se a fornecer inteligência à máquina para que ela possa agir como
                    humana, resolvendo problemas usando sua própria inteligência.

                </Typography>
            </div>

            <div className="inicio">
                <h1>
                    Machine Learning
                </h1>
                <Typography variant="h6" class="typography">
                    O aprendizado de máquina é um método de IA para escolher uma visão
                    computacional, controle de robô, e reconhecimento de fala e rosto, assim por
                    diante. Muitos desenvolvedores de IA consideram que treinar um sistema por
                    mostrar exemplos é mais fácil do que manualmente. Existe uma ampla gama de
                    aprendizado de máquina na área de ciência da computação (Jordan &amp; Mitchell,
                    2015).
                </Typography>
            </div>

            <div className="inicio">
                <h1>
                    Deep Learning
                </h1>
                <Typography variant="h6" class="typography">
                    Algoritmos de deep learning são um subconjunto de algoritmos de aprendizado
                    de máquina, visão computacional, transferência de aprendizagem,
                    processamento de linguagem natural, etc. São as abordagens do método de
                    aprendizagem profunda (Guo et al., 2016). As técnicas convencionais de
                    aprendizado de máquina tem limitações, que Deep métodos de aprendizagem
                    superaram. Ele avançou na resolução de problemas de alto nível, descobrindo
                    intrincadas estruturas em dados de alto nível, reconhecimento de imagem, fala e
                    muito mais (LeCun et al., 2015). O aprendizado profundo pode ser aplicado
                    com sucesso para analisar a imagem e reconhecer o alvo. Para isso, a não
                    uniformidade da forma, posição e tamanho dos defeitos de soldagem têm
                    impactos. Antes disso, era uma tarefa complicada de analisar e avaliar as
                    imagens com defeitos de soldagem adquiridos manualmente (Pan et al., 2020).
                </Typography> <br />
                <Typography variant="h6" class="typography">
                    No meu projeto do covid eu usei de tudo um pouco dos conceitos de
                    inteligência artificial, de machine learning e deep learning!
                </Typography>
            </div>

            <div className="inicio">
                <h1>
                    Como foi o desenvolvimento?
                </h1>
                <Typography variant="h6" class="typography">
                    Primeiramente comecei estudando algumas bibliotecas, dando ênfase nas
                    principais para a análise de dados e para a construção do modelo, que são as
                    bibliotecas do keras e tensorflow.
                </Typography> <br />
                <Typography variant="h6" class="typography">
                    Após estudar as bibliotecas tive que procurar datasets sobre a minha pesquisa,
                    porém está muito complexo de achar dados sobre o tema, até que após muita
                    pesquisa consegui achar uma competição no kaggle chamada
                    SIIM-FISABIO-RSNA COVID-19 DETECTION organizada pela sociedade
                    radiológica da américa do norte e eles disponibilizaram um dataset para os
                    participantes dessa competição.
                </Typography> <br />
                <Typography variant="h6" class="typography">
                    A partir disso fui desenvolvendo meu conhecimento e aplicando no código.
                    Conversei com o professor Aderbal e como já usava o jupyter notebook ele
                    subiu um notebook em uma máquina parruda para me dar o poder
                    computacional que precisava.
                </Typography>
            </div>
        </div>
    )
}
