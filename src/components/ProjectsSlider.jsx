import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ProjectsSlider = () => {
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
  );
};

export default ProjectsSlider;
