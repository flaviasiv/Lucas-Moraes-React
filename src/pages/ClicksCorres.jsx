import '../styles/corresclicks.css';
import '../styles/font.css';

const ClicksCorres = () => {
  return (
    <div>
      <div className="cover">
        <video
          src="/assets/corres/01-cc.mp4"
          autoPlay
          playsInline
          muted
          loop
        ></video>
      </div>
      <main>
        <div className="about">
          <div className="aboutgrid about1">
            <h1>
              CLICKS & <br />
              CORRES
            </h1>
            <h6 id="h6-m">2021 / PHOTOGRAPHY / PERSONAL PROJECT</h6>
            <h5>(PT/BR)</h5>
            <p className="about1">
              Todos os registros foram feitos através do celular durante meses
              praticando corrida de rua pelo mesmo trajeto na zona norte de São
              Paulo durante a COVID-19.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h6 id="h6-w">2021 / PHOTOGRAPHY / PERSONAL PROJECT</h6>
            <h5>(ENG)</h5>
            <p>
              All records were made through the cell phone for months practicing
              street running along the same route in the north of São Paulo
              during COVID-19.
            </p>
          </div>
        </div>
        {/* Continue com o resto do conteúdo */}
      </main>
    </div>
  );
};

export default ClicksCorres;
