import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../styles/corresclicks.css';
import '../styles/font.css';

const ClicksCorres = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
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
              <h5>(PT/BR)</h5>
              <p className="about1" id="about1">
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
          <div className="aboutgrid about2" id="aboutgrid1">
            <h6 id="h6-w">2020 / PERSONAL PROJECT / PHOTOGRAPHY</h6>
            <h5>(ENG)</h5>
            <p className="about1" id="p2-1">
              On March 11, 2020, the WHO declared COVID-19 a pandemic.
              <br />
              <br />
              During this time, I started working from home, a period marked by intense anxiety due to the numerous challenges it brought.
              <br />
              <br />I documented everything through my phone while running daily along the same route in the northern zone of São Paulo
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
            <h5>(PT/BR)</h5>
            <p className="about1" id="about1">
              Como resultado dessas ansiedades, desenvolvi algumas compulsões. <br />
              Para lidar com isso, comecei a praticar esportes, adotando a corrida diária na rua como uma rotina rígida.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h6></h6>
            <h5>(ENG)</h5>
            <p>As a result of this anxiety, I developed some compulsions. To cope, I began practicing sports, adopting daily street running as a strict routine.</p>
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
            <h5>(PT/BR)</h5>
            <p className="about1" id="about1">
              Tudo começou como uma válvula de escape para expressar e aliviar a ansiedade que me atormentava.
              <br />
              <br />
              Repetindo o mesmo trajeto, meu olhar começou a se voltar para aspectos rotineiros de um cotidiano agora estranho, vazio e frio.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h6></h6>
            <h5>(ENG)</h5>
            <p>
              It all started as an outlet to express and alleviate the anxiety that was tormenting me.
              <br />
              <br />
              By repeating the same route, my focus began to shift to the routine aspects of a now strange, empty, and cold everyday life.
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
            <h5>(PT/BR)</h5>
            <p className="about1" id="about1">
              Praticar fotografia durante a corrida é algo que todos deveriam experimentar ao menos uma vez.
              <br />
              <br />A oxigenação do cérebro, o sangue correndo nas veias e o foco na respiração são detalhes simples que muitas vezes não percebemos, mas que se tornam mais evidentes através dessa prática.
              <br />
              <br />
              Esse experimento me permitiu me conectar com esses mínimos detalhes.
            </p>
          </div>
          <div className="aboutgrid about2" id="aboutgrid2">
            <h6>
              <video src="/assets/corres/03-cc.mp4" autoPlay playsInline muted loop></video>
            </h6>
            <h5>(ENG)</h5>
            <p>
              Practicing photography while running is something everyone should experience at least once.
              <br />
              <br />
              The brain's oxygenation, the blood flowing through the veins, and the focus on breathing are simple details we often overlook, but they become more evident through this practice.
              <br />
              <br />
              This experiment allowed me to connect with these subtle details.
            </p>
          </div>
        </div>
        <div className="frames1 frames1-2">
          <img src="/assets/corres/frames12.png" alt="" draggable="false" />
          <img src="/assets/corres/frames13.png" alt="" draggable="false" />
        </div>
        <div className="about tipografia container" id="aboutgrid3">
          <div className="aboutgrid about1">
            <video className="ab-vid" src="/assets/corres/04-cc.mp4" autoPlay playsInline muted loop></video>
            <h5>(PT/BR)</h5>
            <p className="about1" id="about1">
              O mundo está em constante mutação e é preciso estar atento.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h5>(ENG)</h5>
            <p>The world is in constant flux, and it is essential to stay attentive.</p>
          </div>
        </div>
        <div className="frames3">
          <img src="/assets/corres/frames14.png" alt="" draggable="false" />
          <img src="/assets/corres/frames15.png" alt="" draggable="false" />
        </div>

        <button onClick={scrollToTop} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <div className="seta">
            <img src="/assets/seta.png" alt="" draggable="false" />
          </div>
        </button>
        <div className="others">
          <h1>// OUTROS PROJETOS</h1>
          <Swiper
            className="mySwiper1"
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            modules={[Autoplay]}
          >
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/supernova">
                  <img src="/assets/Rectangle1.jpg" alt="araguaia" />
                  <h2>SUPERNOVA</h2>
                  <p>Branding, Art direction</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/botteghe">
                  <img src="/assets/Rectangle2.jpg" alt="araguaia" />
                  <h2>BOTTEGHE DEL CAFFÈ</h2>
                  <p>Branding, Packaging, Art direction</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/lata">
                  <img src="/assets/Rectangle3.jpg" alt="araguaia" />
                  <h2>LATA 05</h2>
                  <p>Branding, Art direction</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/clickscorres">
                  <img src="/assets/Rectangle4.png" alt="araguaia" />
                  <h2>CLICKS & CORRES</h2>
                  <p>Photography, Personal Project</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/buddynutrition">
                  <img src="/assets/Rectangle5.png" alt="araguaia" />
                  <h2>BUDDY NUTRITION</h2>
                  <p>Branding, Art direction, Packaging, Design System</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/estadio97">
                  <img src="/assets/Rectangle6.png" alt="araguaia" />
                  <h2>ESTÁDIO 97</h2>
                  <p>Branding, Art direction</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/supernova">
                  <img src="/assets/Rectangle1.jpg" alt="araguaia" />
                  <h2>SUPERNOVA</h2>
                  <p>Branding, Art direction</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/botteghe">
                  <img src="/assets/Rectangle2.jpg" alt="araguaia" />
                  <h2>BOTTEGHE DEL CAFFÈ</h2>
                  <p>Branding, Packaging, Art direction</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/lata">
                  <img src="/assets/Rectangle3.jpg" alt="araguaia" />
                  <h2>LATA 05</h2>
                  <p>Branding, Art direction</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/clickscorres">
                  <img src="/assets/Rectangle4.png" alt="araguaia" />
                  <h2>CLICKS & CORRES</h2>
                  <p>Photography, Personal Project</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/buddynutrition">
                  <img src="/assets/Rectangle5.png" alt="araguaia" />
                  <h2>BUDDY NUTRITION</h2>
                  <p>Branding, Art direction, Packaging, Design System</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper1">
              <div className="slide1">
                <Link to="/estadio97">
                  <img src="/assets/Rectangle6.png" alt="araguaia" />
                  <h2>ESTÁDIO 97</h2>
                  <p>Branding, Art direction</p>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default ClicksCorres;
