import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProjectsSlider from '../components/ProjectsSlider';
import '../styles/e97.css';
import '../styles/font.css';

const Estadio97 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="cover">
        <video src="/assets/estadio97/01-e97.mp4" autoPlay playsInline muted loop></video>
      </div>
      <main>
        <div className="aboutcontainer about container">
          <div className="firstabout">
            <div className="aboutgrid about1" id="aboutgrid1">
              <h1>ESTÁDIO 97</h1>
              <h6 id="h6-m">2024 / BRANDING / ART DIRECTION</h6>
              <h5>(PT/BR)</h5>
              <p className="about1" id="about1">
                O{' '}
                <a href="https://www.instagram.com/estadio97/">Estádio 97</a> é um dos mais tradicionais programas esportivos de rádio do Brasil, um produto da{' '}
                <a href="https://www.youtube.com/@energia97">Energia 97 FM</a>, emissora de rádio que está presente no cotidiano do brasileiro nos mais diversos contextos, seja na rádio de um taxista em um curto trajeto ou a caminho do estádio em qualquer uma das principais plataformas de streaming, uma vez que a rádio se adaptou com êxito aos meios contemporâneos.
              </p>
            </div>
          </div>
          <div className="aboutgrid about2" id="aboutgrid1">
            <h6 id="h6-w">2024 / BRANDING / ART DIRECTION</h6>
            <h5>(ENG)</h5>
            <p id="p2-1">
              <a href="https://www.instagram.com/estadio97/">Estádio 97</a> is one of Brazil's most traditional sports radio programs, produced by{' '}
              <a href="https://www.youtube.com/@energia97">Energia 97 FM</a>. This radio station is a fixture in the daily lives of Brazilians, whether it's on a taxi radio for a short trip or while heading to the stadium via major streaming platforms, as the station has successfully adapted to contemporary media.
            </p>
          </div>
        </div>
        <div className="frames1 frames1-1">
          <video className="img1" src="/assets/estadio97/02-e97.mp4" autoPlay playsInline muted loop></video>
        </div>
        <div className="frames1">
          <video src="/assets/estadio97/03-e97.mp4" autoPlay playsInline muted loop></video>
        </div>
        <div className="about desafiogrid container">
          <div className="aboutgrid about1">
            <h6>// DESAFIO</h6>
            <p className="about1" id="about1">
              O programa possui uma longa trajetória sendo líder de audiências nas rádios esportivas do Brasil e foi no seu aniversário de 25 anos onde se fez necessário a criação de um logo que representasse e sustentasse essa grandeza e tradição deste clássico e apaixonante meio de comunicação.
            </p>
          </div>
          <div className="aboutgrid about2">
            <p>The program has a long history of leading sports radio audiences in Brazil, and on its 25th anniversary, it became necessary to create a logo that would represent and uphold the greatness and tradition of this classic and passionate medium of communication.</p>
          </div>
        </div>
        <div className="frames1">
          <img src="/assets/estadio97/Frame1.png" alt="" draggable="false" />
        </div>
        <div className="about tipografia container">
          <div className="aboutgrid about1">
            <h6>// SOLUÇÃO</h6>
            <h5>(PT/BR)</h5>
            <p className="about1" id="about1">
              Extremos prologandos para transimitir a sensação algo bem estabelecido, longevo, sólido. Tipografia alta para sustentar autoridade somado a um ícone independente para o numero 97 que representa a sintonia da rádio (e como ela é conhecida popularmente, 'Rádio 97').
            </p>
          </div>
          <div className="aboutgrid about2">
            <h5>(ENG)</h5>
            <p>The logo features bold elements to convey a sense of something well-established, enduring, and solid. The tall typography supports authority, complemented by a distinct icon for the number 97, which represents the radio's frequency (and how it's popularly known as 'Rádio 97').</p>
          </div>
        </div>
        <div className="frames2">
          <video src="/assets/estadio97/04-e97.mp4" autoPlay playsInline muted loop></video>
          <img src="/assets/estadio97/frame2.jpg" alt="" />
        </div>
        <div className="about tipografia container">
          <div className="aboutgrid about1">
            <h6></h6>
            <h5>(PT/BR)</h5>
            <p className="about1" id="about1">
              Representando o triunfo da longevidade da marca, a coroa de louros indica grande mérito, tradicionalmente simbolizava a glória de quem a usava.
              <br />
              <br />A bola está posicionada estratégicamente de maneira que sutilmente represente a origem de tudo e a motivação de toda essa tragetória.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h5>(ENG)</h5>
            <p>Symbolizing the triumph of the brand's longevity, the laurel wreath indicates great merit, traditionally representing the glory of its bearer. The ball is strategically positioned to subtly represent the origin of everything and the motivation behind the entire journey.</p>
          </div>
        </div>
        <div className="frames1 framesgap">
          <video src="/assets/estadio97/05-e97.mp4" autoPlay playsInline muted loop></video>
          <img src="/assets/estadio97/frame3.jpg" alt="imagem capa lata 05" draggable="false" />
          <video src="/assets/estadio97/06-e97.mp4" autoPlay playsInline muted loop></video>
        </div>
        <div className="frames1 frames3">
          <a href="https://www.youtube.com/@energia97" target="_blank" rel="noreferrer">
            <img src="/assets/estadio97/frames6.png" alt="" />
          </a>
        </div>
        <div className="frames1 framesgap">
          <img src="/assets/estadio97/frames4.png" alt="" />
          <img src="/assets/estadio97/frames5.png" alt="" />
          <div className="vd-br">
            <video src="/assets/estadio97/07-e97.mp4" autoPlay playsInline muted loop></video>
          </div>
          <div className="vd-br-phone">
            <video src="/assets/estadio97/08-e97.mp4" autoPlay playsInline muted loop></video>
          </div>
          <img src="/assets/estadio97/frames7.png" alt="" draggable="false" />
        </div>
        <ProjectsSlider />
      </main>
    </div>
  );
};

export default Estadio97;
