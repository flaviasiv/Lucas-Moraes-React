import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectsSlider from '../components/ProjectsSlider';
import { fadeUp, Section, FadeUp, Frame } from '../utils/animations';
import '../styles/iridium-labs.css';
import '../styles/font.css';

const IridiumLabs = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 75]);

  return (
    <>
      <Helmet>
        <title>Iridium Labs - Art Direction & Packaging | Lucas Moraes</title>
        <meta name="description" content="Art direction and packaging design for Iridium Labs, a Brazilian sports supplements brand spanning creatines, whey protein, thermogenics, and high-performance lines." />
        <meta property="og:title" content="Iridium Labs - Art Direction & Packaging" />
        <meta property="og:description" content="Packaging design and brand visual identity for Iridium Labs, a Brazilian sports supplements brand." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://lucaslucas.work/iridium-labs" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://lucaslucas.work/iridium-labs" />
      </Helmet>

      <div className="iridium-page">
        <motion.div className="cover" style={{ y: yHero }}>
          <video
            src="/assets/iridium-labs/gif-1.webm"
            autoPlay
            preload="auto"
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            muted
            loop
            controls={false}
            disablePictureInPicture
            style={{ WebkitTransform: 'translateZ(0)' }}
          />
        </motion.div>

        <main>
          <div className="aboutcontainer container">
            <Section className="firstabout about">
              <FadeUp className="aboutgrid about1" id="aboutgrid1">
                <motion.h1 variants={fadeUp}>IRIDIUM LABS</motion.h1>
                <motion.h6 id="h6-m" variants={fadeUp}>2020~2024 / ART DIRECTION / PACKAGING</motion.h6>
                <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
                <motion.p className="about1" id="about1" variants={fadeUp}>
                  Iridium Labs is a Brazilian sports supplements brand, with a portfolio spanning creatines, whey protein, thermogenics, and high-performance lines. I worked as the project's art director, focused on packaging design and on building the brand's overall visual identity.
                </motion.p>
              </FadeUp>
            </Section>

            <Section className="aboutgrid about2" id="aboutgrid1">
              <motion.h6 id="h6-w" variants={fadeUp}>2020~2024 / ART DIRECTION / PACKAGING</motion.h6>
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p className="about1" id="p2-1" variants={fadeUp}>
                A Iridium Labs® é uma marca brasileira de suplementos esportivos, com portfólio que abrange creatinas, whey protein, termogênicos e linhas de alta performance. Atuei como diretor de arte do projeto, com foco no design de embalagens e na construção do visual da marca como um todo.
              </motion.p>
            </Section>
          </div>

          <Frame className="frames1">
            <img src="/assets/iridium-labs/img-1.png" alt="Iridium Labs WPC packaging" draggable="false" />
          </Frame>

          <Frame className="frames1">
            <video
              src="/assets/iridium-labs/gif-2.webm"
              autoPlay
              preload="auto"
              playsInline
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              muted
              loop
              controls={false}
              disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          <Section className="about desafiogrid container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// GOAL</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                Beyond utilitarian improvements, such as presenting ingredients and benefits in well-structured panels, the brand needed to shed its dark image. The goal was to adapt it to a new perception of health and wellness around supplements, reaching a wider audience as the topic grows in popularity.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Além de melhorias utilitárias, como informar ingredientes e benefícios em painéis bem hierarquizados, havia a necessidade de a marca deixar de ser sombria. O objetivo era adaptá-la a uma nova percepção de saúde e bem-estar em torno dos suplementos, alcançando um público mais amplo diante da popularização do tema.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <video
              src="/assets/iridium-labs/gif-4.webm"
              autoPlay
              preload="auto"
              playsInline
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              muted
              loop
              controls={false}
              disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// FLAVORS</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                For the flavors, the decision was to abandon the plain label and adopt a language with genuine taste appeal. Combined with the typography improvements, the new approach makes it instantly clear which flavor each package holds.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Nos sabores, a decisão foi abandonar o rótulo simplório e adotar uma linguagem com apelo real de paladar. Somada às melhorias de tipografia, a nova abordagem torna imediata a leitura de qual sabor está em cada embalagem.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <video
              src="/assets/iridium-labs/gif-2.webm"
              autoPlay
              preload="auto"
              playsInline
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              muted
              loop
              controls={false}
              disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          <Frame className="frames1">
            <img src="/assets/iridium-labs/img-2.png" alt="Iridium Labs elements redesign" draggable="false" />
          </Frame>

          <Frame className="frames1">
            <video
              src="/assets/iridium-labs/gif-5.webm"
              autoPlay
              preload="auto"
              playsInline
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              muted
              loop
              controls={false}
              disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// TYPOGRAPHY</motion.h6>
              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                I chose taller, bolder typefaces that improve legibility and help the products stand out on the shelves. The same choice strengthens digital applications, where the name has to work on screens and in reduced formats.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                Optei por tipografias mais altas e imponentes, que facilitam a leitura e ajudam os produtos a se destacarem nas gôndolas. A mesma escolha melhora as aplicações digitais, onde o nome precisa funcionar em telas e formatos reduzidos.
              </motion.p>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <video
              src="/assets/iridium-labs/gif-3.webm"
              autoPlay
              preload="auto"
              playsInline
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              muted
              loop
              controls={false}
              disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          <Section className="about desafiogrid container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}></motion.h6>

              <motion.h5 variants={fadeUp}>(ENG)</motion.h5>
              <motion.p className="about1" id="about1" variants={fadeUp}>
                The work was not limited to redesigning and improving existing packaging. It also involved conceiving and developing new product lines, across a range of presentation formats.
              </motion.p>
            </FadeUp>
            <FadeUp className="aboutgrid about2">
              <motion.h5 variants={fadeUp}>(PT/BR)</motion.h5>
              <motion.p variants={fadeUp}>
                O trabalho não se limitou ao redesign e às melhorias das embalagens existentes. Também envolveu a concepção e o desenvolvimento de novas linhas de produtos, em variados formatos de apresentação.
              </motion.p>
            </FadeUp>

            
          </Section>

          <Section className="about desafiogrid container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// NEW LINES <span></span>//CREATINA JUICY</motion.h6>
              </FadeUp></Section>


          <Frame className="frames1">
            <img src="/assets/iridium-labs/img-3.jpg" alt="Iridium Labs Creatina Juicy products" draggable="false" />
            <img src="/assets/iridium-labs/img-4.png" alt="Iridium Labs Juicy product line" draggable="false" />
            <img src="/assets/iridium-labs/img-5.png" alt="Iridium Labs Juicy flavors" draggable="false" />
            <img src="/assets/iridium-labs/img-6.png" alt="Iridium Labs Juicy packaging" draggable="false" />
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// FULLTILT PRE-WORKOUT</motion.h6>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <img src="/assets/iridium-labs/img-7.png" alt="Iridium Labs FullTilt pre-workout" draggable="false" />
            <img src="/assets/iridium-labs/img-8.png" alt="Iridium Labs FullTilt packaging" draggable="false" />
            <img src="/assets/iridium-labs/img-9.png" alt="Iridium Labs FullTilt line" draggable="false" />
          </Frame>

          <Section className="about tipografia container">
            <FadeUp className="aboutgrid about1">
              <motion.h6 variants={fadeUp}>// CREATINA PRO</motion.h6>
            </FadeUp>
          </Section>

          <Frame className="frames1">
            <img src="/assets/iridium-labs/img-10.png" alt="Iridium Labs Creatina Pro" draggable="false" />
          </Frame>

          <Frame className="frames1">
            <video
              src="/assets/iridium-labs/gif-6.webm"
              autoPlay
              preload="auto"
              playsInline
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              muted
              loop
              controls={false}
              disablePictureInPicture
              style={{ WebkitTransform: 'translateZ(0)' }}
            />
          </Frame>

          <ProjectsSlider />
        </main>
      </div>
    </>
  );
};

export default IridiumLabs;
