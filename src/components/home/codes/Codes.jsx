import "./codes.scss"
import Typography from '@mui/material/Typography';

export default function Codes() {
    return (
        <div className="objectives" id="codes">
                <div className="inicio">
                    <h1>
                        Covid-19 detection in computer vision and artificial intelligence
                    </h1>
                    <Typography variant="h6" class="typography">
                        No jupyther notebook , comecei a importar as bibliotecas que iria usar para começar o código:
                    </Typography>
                    <img class="importImg" src="assets/codigo_import.png" alt="Importando bibliotecas" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Como tinha o dataset eu coloquei tudo dentro de uma pasta chamada Dataset_Final e dentro separei em pastas diferentes o conteúdo, test/covid, test/pneumonia , test/normal, train/covid, train/pneumonia, train/normal:
                    </Typography>
                    <img class="importImg" src="assets/codigo_pastas.png" alt="Lendo pastas" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Mostrando uma parte das imagens do Dataset de covid:
                    </Typography>
                    <img class="importImg" src="assets/codigo_redes_neurais.png" alt="Carregamento de dados para a rede neural, mostrando imagens raio-x covid-19" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Mostrando algumas imagens Dataset pneumonia:
                    </Typography>
                    <img class="importImg" src="assets/pulmao.png" alt="Imagens DataSet pneumonia" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Após verificar as pastas, enviei os dados para a rede neural:
                    </Typography>
                    <img class="importImg" src="assets/codigo_carregamento_neural.png" alt="Carregamento de dados para rede neural" />

                    <Typography variant="h6" class="typography" id="textCode">
                        O modelo que desenvolvi foi um modelo RNN com 3 convoluções depois de
                        muitos testes esse foi o modelo que me deu melhores resultados:
                    </Typography>
                    <img class="importImg" src="assets/codigo_modelo_neural.png" alt="Importando bibliotecas" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Após a rede neural carregar treinei o modelo usando 20 epochs e usando um parâmetro que aumentou minha capacidade de processamento, o multiprocessing usando 16 threads do computador:
                    </Typography>
                    <img class="importImg" src="assets/codigo_treinando_modelo.png" alt="Importando bibliotecas" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Quando terminar de treinar , vamos rodar a predição para termos os parâmetros da métrica de acurácia:
                    </Typography>
                    <img class="importImg" src="assets/codigo_predicao_teste.png" alt="Modelo de rede neural" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Gerando a métrica de acurácia:
                    </Typography>
                    <img class="importImg" src="assets/codigo_acuracia.png" alt="Treinando o modelo" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Quando terminei de gerar as métricas, eu testei uma rede neural pronta para ter
                        parâmetros diferentes para ver qual seria a melhor, então o resultado foi a
                        ResNet50 que é uma rede neural gigante que já está no mercado a um bom
                        tempo focada em visão computacional:
                    </Typography>
                    <img class="importImg" src="assets/codigo_resnet.png" alt="Importando bibliotecas" />

                    <Typography variant="h6" class="typography" id="textCode">
                        Treinando a Rede:
                    </Typography>
                    <img class="importImg" src="assets/codigo_resnet50.png" alt="Importando bibliotecas" />
                </div>
            </div>
    )
}
