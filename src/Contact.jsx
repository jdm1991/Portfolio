import "./Contact.css";
import WaterfallBackground from "./assets/WaterfallBackground.mp4";

export default function Contact() {
  return (
    <>
    <div className="page-fade-in">
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          id="background-video"
          className="waterfall-video"
        >
          <source src={WaterfallBackground} type="video/mp4" />
          Your browser is not supported.
        </video>
      </div>
      <div className="get-in-touch">
        <h2>Get in touch today:</h2>
        <img
          className="linkedin"
          src="https://logopng.com.br/logos/linkedin-83.png"
          alt="Linkedin"
        />
        <a className="email" href="mailto:jdmiller1991@outlook.com">Send me an email.</a>
        </div>
        </div>
    </>
  );
}
