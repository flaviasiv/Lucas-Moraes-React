import '../styles/botteghe.css';
import '../styles/font.css';

const Botteghe = () => {
  return (
    <div>
      <div className="cover">
        <video
          src="/assets/botteghe/01-botteghe.mp4"
          autoPlay
          preload="auto"
          playsInline
          muted
          loop
        ></video>
      </div>
      <main>
        <div className="aboutcontainer container">
          <div className="firstabout about">
            <div className="aboutgrid about1" id="aboutgrid1">
              <h1>
                BOTTEGHE <br />
                DEL CAFFÈ
              </h1>
              <h6 id="h6-m">2023 / BRANDING / ART DIRECTION</h6>
              <h5>(PT/BR)</h5>
              <p className="about1" id="about1">
                Com uma inclinação natural pela proteção ao meio ambiente –
                Botteghe Del Caffè é uma marca de cosméticos com produtos a base
                do óleo extraído do café verde em uma fazenda familiar no sul de
                Minas Gerais.
                <br />
                <br />
                Em parceria com produtores locais de azeite, seus produtos,
                respaldados por um{' '}
                <a
                  style={{ textDecoration: 'underline' }}
                  href="https://www.teses.usp.br/teses/disponiveis/60/60137/tde-06092013-092132/publico/Tese_Completa.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  estudo realizado pela Faculdade de Ciências Farmacêuticas da
                  USP
                </a>
                , oferecem hidratação, proteção, manutenção, cicatrização e
                melhoria da barreira cutânea, com propriedades antioxidantes e
                fotoprotetoras aprimoradas para uso terapêutico e cosmético.
              </p>
            </div>
          </div>
          <div className="aboutgrid about2" id="aboutgrid1">
            <h6 id="h6-w">2023 / BRANDING / ART DIRECTION</h6>
            <h5>(ENG)</h5>
            <p className="about1" id="p2-1">
              Botteghe Del Caffè is an environmentally conscious cosmetics brand
              that utilizes green coffee oil from a family farm in southern
              Minas Gerais.
              <br />
              <br />
              Collaborating with local olive oil producers, their products,
              backed by a{' '}
              <a
                style={{ textDecoration: 'underline' }}
                href="https://www.teses.usp.br/teses/disponiveis/60/60137/tde-06092013-092132/publico/Tese_Completa.pdf"
                target="_blank"
                rel="noreferrer"
              >
                study from USP
              </a>
              , offer hydration, protection, maintenance, healing, and improved
              cutaneous barrier, with heightened antioxidant and photoprotective
              properties for therapeutic and cosmetic use.
            </p>
          </div>
        </div>
        <div className="frames1 frames1-1">
          <video
            src="/assets/botteghe/02-botteghe.mp4"
            autoPlay
            preload="auto"
            playsInline
            muted
            loop
          ></video>
        </div>
        {/* Continue com o resto do conteúdo */}
      </main>
    </div>
  );
};

export default Botteghe;
