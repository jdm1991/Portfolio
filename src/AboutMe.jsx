import './AboutMe.css'
import JackPic from './assets/JackPic.jpeg'

export default function AboutMe() {
    return (
        <div className="page-fade-in">
        <div className="aboutme-wrapper">
            <div className='aboutme-image-container'>
                <img src={JackPic} alt="Jack" className="aboutme-image" />
            </div>
            <div className="aboutme-content">
                <h2>About Me:</h2>
                <p>I am a dynamic and innovative Junior Full-Stack Developer with a passion for creating efficient and user-friendly web applications. Possessing a strong foundation in both front-end and back-end technologies, I am adept at utilizing languages such as JavaScript, HTML, CSS, and frameworks like React and Node.js. My background includes working on collaborative projects where I contributed to the development, testing, and deployment of web applications. With a keen eye for design and functionality, I continuously strive to enhance user experience and optimize application performance. Eager to bring my technical skills and fresh perspectives to a forward-thinking development team, where I can contribute to challenging projects and grow professionally.</p>
            </div>
        </div>
        </div>
    );
}
