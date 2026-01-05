import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import '../styles/corresclicks.css';
import '../styles/font.css';

const ClicksCorres = () => {
  return (
    <>
      <Helmet>
        <title>Clicks & Corres - Personal Photography Project | Lucas Moraes</title>
        <meta name="description" content="Personal photography project documenting running during COVID-19 pandemic. All footage was captured on a phone over months of running the same route in the north side of São Paulo." />
        <meta property="og:title" content="Clicks & Corres - Personal Photography Project" />
        <meta property="og:description" content="Photography project documenting running during COVID-19 pandemic in São Paulo." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://lucasmoraes.design/clickscorres" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://lucasmoraes.design/clickscorres" />
      </Helmet>

      <div className='corresclicks-page'>
        <div className="cover">
        <video src="/assets/corres/01-cc.mp4" autoPlay playsInline muted loop></video>
      </div>
      <main>
        <div className="aboutcontainer container">
          <div className="firstabout about">
            <div className="aboutgrid about1" id="aboutgrid1">
              <h1>
                CORRES
                <br />& CLICKS
              </h1>
              <h6 id="h6-m">2020 / PERSONAL PROJECT / PHOTOGRAPHY</h6>
              <h5>(ENG)</h5>
              <p className="about1" id="about1">
                On March 11, 2020, the WHO declared COVID-19 a pandemic.
                <br />
                <br />
                During this time, I started working from home, a period marked by intense anxiety due to the numerous challenges it brought.
                <br />
                <br />I documented everything through my phone while running daily along the same route in the northern zone of São Paulo
              </p>
            </div>
          </div>
          <div className="aboutgrid about2" id="aboutgrid1">
            <h6 id="h6-w">2020 / PERSONAL PROJECT / PHOTOGRAPHY</h6>
            <h5>(PT/BR)</h5>
            <p className="about1" id="p2-1">
              Em 11 de março de 2020, a COVID-19 foi caracterizada pela OMS como uma pandemia.
              <br />
              <br />
              Comecei a trabalhar em home office nesse período, marcado por intensa ansiedade devido aos inúmeros motivos que esse período trazia consigo.
              <br />
              <br />
              Todos os registros foram feitos através do celular durante meses praticando corrida de rua pelo mesmo trajeto na zona norte de São Paulo.
            </p>
          </div>
        </div>
        <div className="frames1-1">
          <img src="/assets/corres/frames2.png" alt="" draggable="false" />
        </div>
        <div className="frames1">
          <img className="img1" src="/assets/corres/frames3.png" alt="imagem capa lata 05" draggable="false" />
          <img className="img1" src="/assets/corres/frames4.png" alt="imagem capa lata 05" draggable="false" />
        </div>
        <div className="about desafiogrid container" id="aboutgrid1">
          <div className="aboutgrid about1">
            <h6></h6>
            <h5>(ENG)</h5>
            <p className="about1" id="about1">
              As a result of this anxiety, I developed some compulsions. To cope, I began practicing sports, adopting daily street running as a strict routine.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h6></h6>
            <h5>(PT/BR)</h5>
            <p>Como resultado dessas ansiedades, desenvolvi algumas compulsões. <br />
              Para lidar com isso, comecei a praticar esportes, adotando a corrida diária na rua como uma rotina rígida.</p>
          </div>
        </div>
        <div className="frames1" style={{ marginBottom: '110px' }}>
          <video src="/assets/corres/02-cc.mp4" autoPlay playsInline muted loop></video>
        </div>
        <div className="frames1 frames1-2">
          <img src="/assets/corres/frames5.png" alt="" draggable="false" />
          <img src="/assets/corres/frames6.png" alt="" draggable="false" />
          <img src="/assets/corres/frames7.png" alt="" draggable="false" />
        </div>
        <div className="about desafiogrid container" id="aboutgrid1">
          <div className="aboutgrid about1">
            <h6></h6>
            <h5>(ENG)</h5>
            <p className="about1" id="about1">
              It all started as an outlet to express and alleviate the anxiety that was tormenting me.
              <br />
              <br />
              By repeating the same route, my focus began to shift to the routine aspects of a now strange, empty, and cold everyday life.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h6></h6>
            <h5>(PT/BR)</h5>
            <p>
              Tudo começou como uma válvula de escape para expressar e aliviar a ansiedade que me atormentava.
              <br />
              <br />
              Repetindo o mesmo trajeto, meu olhar começou a se voltar para aspectos rotineiros de um cotidiano agora estranho, vazio e frio.
            </p>
          </div>
        </div>
        <div className="frames1">
          <img src="/assets/corres/frames8.png" alt="imagem capa lata 05" draggable="false" />
        </div>
        <div className="frames1-1 frames1-3">
          <img src="/assets/corres/frames9.png" alt="imagem capa lata 05" draggable="false" />
        </div>
        <div className="frames2">
          <img src="/assets/corres/frames10.png" alt="" draggable="false" />
        </div>
        <div className="frames1">
          <img src="/assets/corres/frames11.png" alt="" draggable="false" />
        </div>
        <div className="about tipografia container" id="aboutgrid1">
          <div className="aboutgrid about1">
            <h5>(ENG)</h5>
            <p className="about1" id="about1">
              Practicing photography while running is something everyone should experience at least once.
              <br />
              <br />
              The brain's oxygenation, the blood flowing through the veins, and the focus on breathing are simple details we often overlook, but they become more evident through this practice.
              <br />
              <br />
              This experiment allowed me to connect with these subtle details.
            </p>
          </div>
          <div className="aboutgrid about2" id="aboutgrid2">
            <h6>
              <video src="/assets/corres/03-cc.mp4" autoPlay playsInline muted loop></video>
            </h6>
            <h5>(PT/BR)</h5>
            <p>
              Praticar fotografia durante a corrida é algo que todos deveriam experimentar ao menos uma vez.
              <br />
              <br />A oxigenação do cérebro, o sangue correndo nas veias e o foco na respiração são detalhes simples que muitas vezes não percebemos, mas que se tornam mais evidentes através dessa prática.
              <br />
              <br />
              Esse experimento me permitiu me conectar com esses mínimos detalhes.
            </p>
          </div>
        </div>
        <div className="frames1 frames1-2">
          <img src="/assets/corres/frames12.png" alt="" draggable="false" />
          <img src="/assets/corres/frames13.png" alt="" draggable="false" />
        </div>
        <div className="about container" id="aboutgrid3">
          <div className="aboutgrid about1">
            <video className="ab-vid" src="/assets/corres/04-cc.mp4" autoPlay playsInline muted loop></video>
            <h5>(ENG)</h5>
            <p className="about1" id="about1">
              The world is in constant flux, and it is essential to stay attentive.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h5>(PT/BR)</h5>
            <p>O mundo está em constante mutação e é preciso estar atento.</p>
          </div>
        </div>
        <div className="frames3">
          <img src="/assets/corres/frames14.png" alt="" draggable="false" />
          <img src="/assets/corres/frames15.png" alt="" draggable="false" />
        </div>
        <ProjectsSlider />
      </main>
      </div>
    </>
  );
};

export default ClicksCorres;
