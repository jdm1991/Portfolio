import { useEffect, useState } from "react";
import "./AboutMe.css";
import JackPic from "./assets/JackPic.jpeg";

export default function AboutMe() {
  // Initial tea count
  const initialTeaCount = 4578;

  // State to hold the current count of teas
  const [teaCount, setTeaCount] = useState(initialTeaCount);

  useEffect(() => {
    // Set up an interval to increase the tea count every 10 seconds
    const interval = setInterval(() => {
      setTeaCount((prevCount) => prevCount + 1);
    }, 10000); // 10000 milliseconds = 10 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <body className="aboutme-body">
      <div className="aboutme-wrapper">
        <div className="aboutme-image-container">
          <img src={JackPic} alt="Jack" className="aboutme-image" />
        </div>
        <div className="aboutme-details">
          <h2>Jack Miller</h2>
          <br />
          <h3>Experience</h3>
          <span>6 Months</span>
          <br />
          <h3>Projects completed:</h3>
          <span>6+</span>
          <br />
          <h3>Cups of tea Consumed:</h3>
          <span id="teaCount">{teaCount.toLocaleString()}</span>
        </div>
        <div className="aboutme-content">
          <h2>About Me:</h2>
          <p>
            As a motivated and skilled Junior Full Stack Software Developer, I
            bring a unique blend of foundational knowledge in both front-end and
            back-end technologies. My experience includes developing responsive
            user interfaces, implementing dynamic client-side scripting, and
            building robust server-side applications. <br />
            <br /> With a strong commitment to writing clean, maintainable code,
            I excel in collaborative environments where my passion for learning
            and my ability to adapt to new technologies and frameworks
            contribute to the success of complex software projects. My proactive
            approach to problem-solving and eagerness to embrace the latest
            industry trends make me a valuable asset to any development team
            seeking innovation and efficiency.
          </p>
        </div>
      </div>
    </body>
  );
}
