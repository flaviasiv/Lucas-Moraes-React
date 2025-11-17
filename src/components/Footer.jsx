import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="contact" id="contact">
        <h6 className="h6footer1">// VAMOS COLABORAR EM UM PROJETO?</h6>
        <h6 className="h6footer2">
          // VAMOS <br />
          COLABORAR EM <br />
          UM PROJETO?
        </h6>
        <div className="contactlink">
          <p>
            Pretende iniciar um projeto ou apenas dar dizer um olá? Entre em
            contato através do e-mail e farei o possível para responder em até
            24 horas!
          </p>
          <a href="mailto:vaziodesignstudio@gmail.com" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                fill="#9A9A9A"
              />
            </svg>
            SAY HI!
          </a>
        </div>
      </div>
      <h1 className="signatureH">LUCAS.M</h1>
    </footer>
  );
};

export default Footer;
