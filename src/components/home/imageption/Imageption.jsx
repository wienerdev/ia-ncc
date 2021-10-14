import "./imageption.scss"
import Typography from '@mui/material/Typography';

export default function Imageption() {
    return (
        <div className="imageption">
            <div className="inicio">
                <h1>
                    A não-linearidade da escala de cores
                </h1>
                <Typography variant="h6" class="typography">
                    Essa é a forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):
                </Typography>
                <img class="importImg" src="assets/escala_cores.png" alt="Forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):" />
                <Typography class="typographyImageption">
                    Escala de cinza. Os valores indicam as cores na forma como são armazenadas, e <b>não</b> suas luminosidades reais -- e.g. 0,4 corresponde à cor Gray(0.4), cuja luminosidade real <b>não</b> é 40%.
                </Typography>
            </div>

            <div className="inicio">
                <Typography variant="h6" class="typography">
                    Apesar de ela parecer visualmente correta, com a luminosidade aumentando linearmente do preto (luminosidade 0,0) ao branco (luminosidade 1,0), esse não é o caso. Considere o seguinte esquema (o fator de zoom precisa estar em 100%):
                </Typography>
                <img class="importImg" src="assets/escala_cores2.png" alt="Forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):" />
            </div>

            <div className="inicio">
                <Typography variant="h6" class="typography">
                    As grades xadrez são compostas apenas por pixels (completamente) pretos e brancos, formando quadrados progressivamente menores. Nota-se que, então, a luminosidade média de cada grade é exatamente 0,5, uma vez que metade de sua área é composta por pixels completamente apagados e a outra metade por pixels completamente acesos. (Relativo às configurações de brilho do monitor.)
                    Agora, sobrepomos às grades duas faixas de cor sólida: acima, a cor Gray(0.5), e abaixo a cor Gray(0.73):
                </Typography>
                <img class="importImg" src="assets/escala_cores3.png" alt="Forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):" />
            </div>

            <div className="inicio">
                <Typography variant="h6" class="typography">
                    Observe que Gray(0.5) é claramente uma cor bem mais escura que a luminosidade média das grades (50%), enquanto Gray(0.73) corresponde exatamente ao valor desejado. Isso demonstra a não-linearidade da escala de cores utilizada pelo computador (escala gama), que objetiva utilizar melhor o intervalo normalizado [0, 1] de acordo com a percepção do olho humano -- temos mais facilidade para distinguir cores na região mais escura (luminosidades menores), de forma que essas recebem uma faixa maior do intervalo para serem representadas.
                </Typography>
                <br />
                <Typography variant="h6" class="typography">
                    Para comparação, segue uma escala cinza de luminosidade linear, alinhada à escala gama não corrigida:
                </Typography>
                <img class="importImg" src="assets/escala_cores4.png" alt="Forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):" />
                <Typography class="typographyImageption">
                    Abaixo, escala de cinza linear (corrigida), comparada à escala gama (acima).
                </Typography>
            </div>

            <div className="inicio">
                <h1>
                    Média de cores e alteração de zoom
                </h1>
                <Typography variant="h6" class="typography">
                    A não-linearidade da escala gama utilizada significa que calcular a cor média de um dado conjunto de cores fornecidas é um pouco mais difícil do que o imaginado a princípio. Por exemplo, demonstramos acima que a média entre Gray(0.0) e Gray(1.0) é Gray(0.73), e não Gray(0.5). Para fazer o cálculo corretamente, devemos:
                </Typography>
                <br />
                <Typography variant="h6" class="typography">
                    1. Calcular as luminosidades reais de todas as cores, ou seja, converter seus valores para uma escala linear.
                </Typography>
                <Typography variant="h6" class="typography">
                    2. Calcular a média das luminosidades.
                </Typography>
                <Typography variant="h6" class="typography">
                    3. Converter o resultado de volta para a escala gama.
                </Typography>
                <br />
                <Typography variant="h6" class="typography">
                    Isso é importante quando se deseja visualizar uma imagem em um fator de zoom menor; digamos, 50%. Ao reduzir a escala para mostrar uma imagem em um tamanho menor que o real, precisa-se calcular o valor novo de cada pixel, baseado na média local de regiões correspondentes da imagem original.
                </Typography>
                <br />
                <Typography variant="h6" class="typography">
                    Porém, diversas aplicações -- exemplos verificados: Microsoft Paint, Firefox, Chromium, gThumb -- realizam tal cálculo baseado nos valores originais (escala gama), economizando tempo e/ou ganhando simplicidade ao evitar as conversões descritas acima. Isso permite a construção cuidadosa de imagens que mudam drasticamente conforme o nível de zoom.
                </Typography>
            </div>

            <div className="inicio">
                <h1>
                    Exemplos de resultados
                </h1>
                <Typography variant="h6" class="typography">
                    Altere o zoom das imagens seguintes e observe o que acontece:
                </Typography>
                <a href="https://pixabay.com/illustrations/duck-mallard-drake-transparent-1978680/" target="_blank" rel="noreferrer">
                    <img class="resultadoImg" src="assets/resultado_escala.png" alt="Forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):" />
                </a>
                <a href="https://pixabay.com/photos/penguin-king-penguin-bird-nature-1085417/" target="_blank" rel="noreferrer">
                    <img class="resultadoImg" src="assets/resultado_escala2.png" alt="Forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):" />
                </a>
                <a href="https://pixabay.com/illustrations/duck-mallard-drake-transparent-1978680/" target="_blank" rel="noreferrer">
                    <img class="resultadoImg" src="assets/resultado_escala3.png" alt="Forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):" />
                </a>
                <a href="https://pixabay.com/photos/penguin-king-penguin-bird-nature-1085417/" target="_blank" rel="noreferrer">
                    <img class="resultadoImg" src="assets/resultado_escala4.png" alt="Forma como computadores representam/interpretam cores em escala de cinza (valores normalizados para a faixa de 0 a 1):" />
                </a>
            </div>

        </div>
    )
}
