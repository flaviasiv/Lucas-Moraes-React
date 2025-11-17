import '../styles/buddy.css';
import '../styles/font.css';

const BuddyNutrition = () => {
  return (
    <div>
      <div className="cover">
        <video
          src="/assets/buddy/01-buddy.mp4"
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
              BUDDY <br />
              NUTRITION
            </h1>
            <h6 id="h6-m">2023 / BRANDING / ART DIRECTION / PACKAGING / DESIGN SYSTEM</h6>
            <h5>(PT/BR)</h5>
            <p className="about1">
              A Buddy desenvolve suplementos caninos com as melhores fórmulas
              possíveis e faz recomendações personalizadas para que você
              descubra de um jeito descomplicado como cuidar da saúde e bem
              estar do seu bichinho.
            </p>
          </div>
          <div className="aboutgrid about2">
            <h6 id="h6-w">2023 / BRANDING / ART DIRECTION / PACKAGING / DESIGN SYSTEM</h6>
            <h5>(ENG)</h5>
            <p>
              Buddy develops canine supplements with the best possible formulas
              and makes personalized recommendations so you can discover in a
              simple way how to take care of your pet's health and well-being.
            </p>
          </div>
        </div>
        {/* Continue com o resto do conteúdo */}
      </main>
    </div>
  );
};

export default BuddyNutrition;
