import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import '../styles/style.css';

const Home = () => {
  // Calculate age based on birth year 1995
  const birthYear = 1995;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  // Scroll to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    'Photoshop',
    'Illustrator',
    'Webflow',
    'Figma',
    'InDesign',
    'Premiere Pro',
    'After Effects',
  ];

  const projects = [
    {
      id: 'supernova',
      title: 'SUPERNOVA',
      category: 'Branding, Art Direction',
      description:
        'Supernova Entertainment é uma gravadora/produtora musical localizada em São Paulo (BRA) marcada pela ascensão astronômica de seus artistas.',
      video: '/assets/home/thumb-supernova.mp4',
      link: '/supernova',
    },
    {
      id: 'botteghe',
      title: 'BOTTEGHE DEL CAFFÈ',
      category: 'Branding, Art Direction',
      description:
        'Com uma inclinação natural pela proteção ao meio ambiente – Botteghe Del Caffè é uma marca de cosméticos com produtos a base do óleo extraído do café verde em uma fazenda familiar no sul de Minas Gerais.',
      video: '/assets/home/thumb-botteghe.mp4',
      link: '/botteghe',
    },
    {
      id: 'buddy',
      title: 'BUDDY NUTRITION',
      category: 'Branding, Art direction, Packaging, Design System',
      description:
        'A Buddy desenvolve suplementos caninos com as melhores fórmulas possíveis e faz recomendações personalizadas para que você descubra de um jeito descomplicado como cuidar da saúde e bem estar do seu bichinho.',
      video: '/assets/home/thumb-buddy.mp4',
      link: '/buddynutrition',
    },
    {
      id: 'lata',
      title: 'LATA 05',
      category: 'Branding, Art Direction',
      description:
        'Um evento secreto, sem local, data ou temática pré definida que contará apenas com convidados nas primeira edições e usará das apresentações surpresas como a principal forma de instigar novas pessoas e difundir a marca.',
      video: '/assets/home/thumb-lata.mp4',
      link: '/lata',
    },
    {
      id: 'clicks',
      title: 'CLICKS & CORRES',
      category: 'Photography, Personal Project',
      description:
        'Todos os registros foram feitos através do celular durante meses praticando corrida de rua pelo mesmo trajeto na zona norte de São Paulo durante a COVID-19.',
      video: '/assets/home/thumb-cc.mp4',
      link: '/clickscorres',
    },
    {
      id: 'estadio97',
      title: 'ESTADIO 97',
      category: 'Branding, Art Direction',
      description:
        'O Estádio 97 é um dos mais tradicionais programas esportivos de rádio do Brasil, um produto da Energia 97 FM, emissora de rádio que está presente no cotidiano do brasileiro nos mais diversos contextos...',
      video: '/assets/home/thumb-estadio97.mp4',
      link: '/estadio97',
    },
  ];

  return (
    <main>
        <div className="logoimg">
          <img
            src="/assets/profile-lucas-moraes.jpg"
            alt="Lucas profile picture"
            draggable="false"
          />
        </div>
        <div className="logo">
          <p>
            LUCAS MORAES // {age} <br />
            (BASED IN SÃO PAULO, BRAZIL)
          </p>
        </div>

        <Swiper
          className="mySwiper mySwiper2"
          spaceBetween={0}
          loop={true}
          slidesPerView="auto"
          speed={1000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <SwiperSlide key={index} className="swiper2">
              <li>{skill}</li>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="sobre" id="about">
          <h2 className="sobreT1 Th1">// ABOUT ME</h2>
          <p className="sobreT3">(PT/BR)</p>
          <p className="sobreT4">
            Designer multidisciplinar e diretor de arte com mais de 10 anos de
            experiência colaborando em agências, estúdios e marcas desenvolvendo
            uma variedade de projetos legais envolvendo identidade visual, design
            estratégico, desenvolvimento de produtos e por aí vai.
          </p>
        </div>

        <div className="sobre sobre2" id="about">
          <h2 className="sobreT1">
            <div className="sobreT6">
              <video
                src="/assets/home/0a03b9c5f67bfd1c2a257fe6fc25feba.mp4"
                autoPlay
                playsInline
                muted
                loop
              ></video>
            </div>
          </h2>
          <p className="sobreT3 sobre2T3">(ENG)</p>
          <p className="sobreT4 sobre2T4">
            Multidisciplinary designer and art director with over 10 years of
            experience collaborating with agencies, studios, and brands on a
            variety of cool projects involving visual identity, strategic design,
            product development, and more.
          </p>
          <h2 className="sobreT1">
            <div className="sobreT6-m">
              <video
                src="/assets/home/0a03b9c5f67bfd1c2a257fe6fc25feba.mp4"
                autoPlay
                playsInline
                muted
                loop
              ></video>
            </div>
          </h2>
        </div>

        <div className="work" id="works">
          <h2 className="Th1">// WORKS</h2>
        </div>

        <div className="worksgrid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`work${index === 0 || index === 2 ? 'T1' : index + 1} workcard`}
            >
              <Link to={project.link} className="imgwork">
                <video src={project.video} autoPlay playsInline muted loop></video>
              </Link>
              <div className="cardsinfo">
                <h2>{project.title}</h2>
                <h5>{project.category}</h5>
                <Link to={project.link} className="imgwork-m">
                  <video src={project.video} autoPlay playsInline muted loop></video>
                </Link>
                <p>
                  {project.description}
                  <br />
                  <Link to={project.link}>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                      >
                        <path
                          d="M18.2071 8.89461C18.5976 8.50408 18.5976 7.87092 18.2071 7.48039L11.8431 1.11643C11.4526 0.725908 10.8195 0.725908 10.4289 1.11643C10.0384 1.50696 10.0384 2.14012 10.4289 2.53065L16.0858 8.1875L10.4289 13.8444C10.0384 14.2349 10.0384 14.868 10.4289 15.2586C10.8195 15.6491 11.4526 15.6491 11.8431 15.2586L18.2071 8.89461ZM0 9.1875L17.5 9.1875V7.1875L0 7.1875L0 9.1875Z"
                          fill="black"
                        />
                      </svg>
                      VER PROJETO
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="seta setah">
          <a href="#home" onClick={scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="72"
              viewBox="0 0 16 72"
              fill="none"
            >
              <path
                d="M8.7071 0.292892C8.31658 -0.0976334 7.68341 -0.0976333 7.29289 0.292892L0.928929 6.65685C0.538405 7.04738 0.538405 7.68054 0.928929 8.07107C1.31945 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.7071 0.292892ZM9 72L9 1L7 1L7 72L9 72Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
    </main>
  );
};

export default Home;
