import '../styles/lata.css';
import '../styles/font.css';

const Lata = () => {
  return (
    <div>
      <div className="cover">
        <video src="/assets/lata/01-lata.mp4" autoPlay playsInline muted loop></video>
      </div>
      <main>
        <div className="about">
          <div className="aboutgrid about1">
            <h1>LATA 05</h1>
            <h6 id="h6-m">2023 / BRANDING / ART DIRECTION</h6>
            <h5>(PT/BR)</h5>
            <p className="about1">
              Um evento secreto, sem local, data ou temática pré definida que
              contará apenas com convidados nas primeira edições e usará das
              apresentações surpresas como a principal forma de instigar novas
              pessoas e difundir a marca.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h6 id="h6-w">2023 / BRANDING / ART DIRECTION</h6>
            <h5>(ENG)</h5>
            <p>
              A secret event, with no pre-defined location, date or theme, which
              will only feature guests in the first editions and will use
              surprise presentations as the main way to instigate new people and
              spread the brand.
            </p>
          </div>
        </div>
        {/* Continue com o resto do conteúdo */}
      </main>
    </div>
  );
};

export default Lata;
