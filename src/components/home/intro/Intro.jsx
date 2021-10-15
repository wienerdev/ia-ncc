import "./intro.scss"

export default function Intro() {
    return (
        <div className="home" id="intro">
            <div className="container">
                <div className='left1'>
                    <h1>Inteligência artificial aplicada a visão computacional</h1>
                </div>
                <div className='right'>
                    <img src="assets/inteligencia-artificial_2.png" alt="Inteligência Artificial - IA" />
                </div>

            </div>
            <div className="container">
                <div className="left2">
                    <h3>Veja o vídeo:</h3>
                </div>
            </div>
            <div className="video">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/nUxLKbbQWxw"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

        </div>
    )
}
