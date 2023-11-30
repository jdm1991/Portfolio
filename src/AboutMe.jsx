import { useEffect, useState } from 'react';
import './AboutMe.css';
import JackPic from './assets/JackPic.jpeg';

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
        <div className="page-fade-in">
            <div className="aboutme-wrapper">
                <div className='aboutme-image-container'>
                    <img src={JackPic} alt="Jack" className="aboutme-image" />
                </div>
                <div className='aboutme-details'>
                    <h2>Jack Miller</h2>
                    <br />
                    <h3>Experience</h3><span>6 Months</span>
                    <br />
                    <h3>Projects completed:</h3><span>6+</span>
                    <br />
                    <h3>Cups of tea Consumed:</h3><span id="teaCount">{teaCount.toLocaleString()}</span>
                </div>
                <div className="aboutme-content">
                    <h2>About Me:</h2>
                    <p>Your about me description...</p>
                </div>
            </div>
        </div>
    );
}
