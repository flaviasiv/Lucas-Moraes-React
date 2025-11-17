import '../styles/e97.css';
import '../styles/font.css';

const Estadio97 = () => {
  return (
    <div>
      <div className="cover">
        <video
          src="/assets/estadio97/01-e97.mp4"
          autoPlay
          playsInline
          muted
          loop
        ></video>
      </div>
      <main>
        <div className="about">
          <div className="aboutgrid about1">
            <h1>ESTADIO 97</h1>
            <h6 id="h6-m">2023 / BRANDING / ART DIRECTION</h6>
            <h5>(PT/BR)</h5>
            <p className="about1">
              O Estádio 97 é um dos mais tradicionais programas esportivos de
              rádio do Brasil, um produto da Energia 97 FM, emissora de rádio
              que está presente no cotidiano do brasileiro nos mais diversos
              contextos...
            </p>
          </div>
          <div className="aboutgrid about2">
            <h6 id="h6-w">2023 / BRANDING / ART DIRECTION</h6>
            <h5>(ENG)</h5>
            <p>
              Estádio 97 is one of Brazil's most traditional sports radio
              programs, a product of Energia 97 FM, a radio station that is
              present in Brazilians' daily lives in the most diverse contexts...
            </p>
          </div>
        </div>
        {/* Continue com o resto do conteúdo */}
      </main>
    </div>
  );
};

export default Estadio97;
