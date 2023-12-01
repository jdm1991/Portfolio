import "./Portfolio.css";
import DashboardChallenge from "./assets/DashboardChallenge.jpg";
import GreengrocersChallenge from "./assets/GreengrocersChallenge.jpg";
import PersonalProject from "./assets/PersonalProject.jpg";

export default function Portfolio() {
  return (
    <body className="portfolio-page">
      <div className="portfolio-container">
        <h1 className="portfolio-header">
          Hover over a tile for more information
        </h1>
        <div className="project-1">
          <div className="project-front">
            <h3>The Cohort Manager Project</h3>
            <img src={DashboardChallenge} alt="Dashboard" />
          </div>
          <div className="project-back">
            <p>Description of Cohort Manager Project...</p>
            <a href="link-to-cohort-manager">View Project</a>
          </div>
        </div>
        <div className="project-2">
          <div className="project-front">
            <h3>Workout & Ice Bath Tracker</h3>
            <img src={PersonalProject} alt="Personal" />
          </div>
          <div className="project-back">
            <p>Description of Workout & Ice Bath Tracker...</p>
            <a href="link-to-workout-tracker">View Project</a>
          </div>
        </div>
        <div className="project-3">
          <div className="project-front">
            <h3>The Greengrocers Project</h3>
            <img src={GreengrocersChallenge} alt="Greengrocers" />
          </div>
          <div className="project-back">
            <p>Description of Greengrocers Project...</p>
            <a href="link-to-greengrocers">View Project</a>
          </div>
        </div>
      </div>
    </body>
  );
}
