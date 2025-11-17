import '../styles/supernova.css';
import '../styles/font.css';

const Supernova = () => {
  return (
    <div>
      <div className="cover">
        <video src="/assets/supernova/01-spnv.mp4" autoPlay playsInline muted loop></video>
      </div>
      <main>
        <div className="about">
          <div className="aboutgrid about1" id="aboutgrid1">
            <h1>
              SUPERNOVA <br />
              ENTERTAINMENT
            </h1>
            <h6 id="h6-m">2023 / BRANDING / ART DIRECTION</h6>
            <h5>(PT/BR)</h5>
            <p className="about1" id="about1">
              Supernova Entertainment é uma gravadora/produtora musical
              localizada em São Paulo (BRA) marcada pela ascensão astronômica
              de seus artistas.
              <br />
              <br />
              Thiago Veigh é o principal nome,{' '}
              <a
                href="https://www.correiobraziliense.com.br/diversao-e-arte/2023/05/5097968-trapper-veigh-fala-sobre-conquista-do-1-lugar-do-spotify-global.html"
                target="_blank"
                rel="noreferrer"
              >
                conquistou o top 1 global do Spotify
              </a>
              . O rapper detém ainda a maior estreia nacional da história da
              plataforma com o disco Dos Prédios Deluxe (mais de 6,5 de milhões
              de acessos no streaming).
            </p>
          </div>
        </div>
        <div className="aboutgrid about2" id="aboutgrid1">
          <h6 id="h6-w">2023 / BRANDING / ART DIRECTION</h6>
          <h5>(ENG)</h5>
          <p id="p2-1">
            Supernova Entertainment is a record label/music producer located in
            São Paulo (BRA) marked by the astronomical rise of its artists.
            <br />
            <br />
            Thiago Veigh is the main name,{' '}
            <a
              href="https://www.correiobraziliense.com.br/diversao-e-arte/2023/05/5097968-trapper-veigh-fala-sobre-conquista-do-1-lugar-do-spotify-global.html"
              target="_blank"
              rel="noreferrer"
            >
              he reached the global top 1 on Spotify
            </a>
            . The rapper also has the biggest national debut in the platform's
            history with the album Dos Prédios Deluxe (more than 6.5 million
            streaming hits).
          </p>
        </div>
        <div className="frames1">
          <video
            src="/assets/supernova/02-spnv.mp4"
            className="img1"
            autoPlay
            playsInline
            muted
            loop
          ></video>
        </div>
        <div className="about">
          <div className="aboutgrid about1">
            <h6>// DESAFIO</h6>
            <p className="about1" id="about1">
              O inicio desse trabalho parte do objetivo claro da gravadora de
              profissionalizar a marca e transparecer o quanto suas produções
              são capazes de lapidar e impulsionar jovens talentos do trap
              brasileiro.
            </p>
          </div>
          <div className="aboutgrid about2">
            <p>
              The beginning of this work is part of the label's clear objective
              of professionalizing the brand and showing how its productions are
              capable of polishing and boosting young Brazilian trap talents.
            </p>
          </div>
        </div>
        <div className="frames1">
          <img
            src="/assets/supernova/Frame2.png"
            alt="imagem capa supernova"
            draggable="false"
          />
          <video src="/assets/supernova/03-spnv.mp4" autoPlay playsInline muted loop></video>
        </div>
        <div className="about">
          <div className="aboutgrid about1">
            <p className="about1" id="about1">
              Ascensão e dimensão são as palavras chaves nesse momento
              <br /> <br />
              Optei por uma tipografia que em nenhuma aplicação passaria por
              despercebida. Impactante e densa o suficiente para que comportasse
              a internalização do traçado da estrela ascendida.
            </p>
          </div>
          <div className="aboutgrid about2">
            <p>
              Ascension and dimension are the key words at this moment.
              <br /> <br />
              I opted for a typography that would go unnoticed in no
              application. Impactful and dense enough to allow for the
              internalization of the brand's rising star design.
            </p>
          </div>
        </div>
        <div className="frames1">
          <img
            src="/assets/supernova/frame4.jpg"
            alt="imagem capa supernova"
            draggable="false"
          />
        </div>
        {/* Continue com o resto do conteúdo conforme necessário */}
      </main>
    </div>
  );
};

export default Supernova;
