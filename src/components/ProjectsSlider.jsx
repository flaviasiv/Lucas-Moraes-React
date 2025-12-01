import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../styles/ProjectsSlider.css';

const ProjectsSlider = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      to: '/supernova',
      image: '/assets/Rectangle1.jpg',
      title: 'SUPERNOVA',
      description: 'Branding, Art direction',
    },
    {
      to: '/botteghe',
      image: '/assets/Rectangle2.jpg',
      title: 'BOTTEGHE DEL CAFFÈ',
      description: 'Branding, Packaging, Art direction',
    },
    {
      to: '/lata',
      image: '/assets/Rectangle3.jpg',
      title: 'LATA 05',
      description: 'Branding, Art direction',
    },
    {
      to: '/clickscorres',
      image: '/assets/Rectangle4.png',
      title: 'CLICKS & CORRES',
      description: 'Photography, Personal Project',
    },
    {
      to: '/buddynutrition',
      image: '/assets/Rectangle5.png',
      title: 'BUDDY NUTRITION',
      description: 'Branding, Art direction, Packaging, Design System',
    },
    {
      to: '/estadio97',
      image: '/assets/Rectangle6.png',
      title: 'ESTÁDIO 97',
      description: 'Branding, Art direction',
    },
  ];

  return (
    <div>
        <button className='btnSeta' onClick={scrollToTop} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <div className="seta">
            <img src="/assets/seta.png" alt="" draggable="false" />
          </div>
        </button>
    <div className="others">
      <h1>// OTHER PROJECTS</h1>
      <Swiper
        className="mySwiper1"
        spaceBetween={0}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        centeredSlides={true}
        modules={[Autoplay]}
      >
        {/* Render projects twice for seamless loop */}
        {[...projects, ...projects].map((project, index) => (
          <SwiperSlide key={index} className="swiper1">
            <div className="slide1">
              <Link to={project.to}>
                <img src={project.image} alt={project.title} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default ProjectsSlider;
