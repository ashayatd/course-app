import React from "react";
import './Landing.css';
import image1 from '../../../assets/Abacus.png';
import image2 from '../../../assets/Briefcase.png';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Landing() {
  const images = [
    image1,
    image2,
    // Add the paths for the other 8 images here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // 500ms (2 images per second)

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
    <div className="containerx">
      <div className="head-segment">
        <p>
          'Education is the most powerful weapon which you can use to change the world - Nelson Mandela'
        </p>
        <h1>
          Unlock Your Potential with <br /> <span>High-Quality Courses</span>
        </h1>
        <button className="button-66" onClick={()=>{Navigate('/courses')}}>Get Started</button>
      </div>
      <div className="img-segment">
        <img src={images[currentImageIndex]} alt="Image" />
      </div>
    </div>
  </div>
  );
}

export default Landing;
