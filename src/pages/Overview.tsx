// import React from 'react'
import profileImage from "../assets/profile.gif"

const Overview = () => {
  return (
    <section>
      <div className="about-container">
        <div className="profile-image">
          <img src={profileImage} alt="" className="profile-image" />
        </div>
        <div className="about-description">
          <h1>Engineering Robust Software for Real-World Challenges</h1>
          <h2>Crafting Intelligent Solutions Across Web, Mobile & AI</h2>
          <p>
            I'm a multidisciplinary software developer with a passion for
            crafting intelligent, user-focused solutions. My expertise spans
            software design, full-stack web development, mobile app creation,
            and AI/ML engineering—allowing me to build seamless digital
            experiences powered by smart technology. Whether it's designing
            intuitive interfaces or training machine learning models, I thrive
            on solving complex problems with clean, scalable code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview
