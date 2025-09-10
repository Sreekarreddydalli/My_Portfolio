import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div id="about" className="about-container"> {/* Added id="about" */}
      <h1 className="about-heading">ABOUT</h1>
      <p className="about-subheading">
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
      </p>
      <div className="about-grid">
        {/* Left Side - Get to Know Me */}
        <div className="about-left">
          <h2>EDUCATION</h2>
          <p>
            <strong>SR UNIVERSITY</strong>, Warangal <br />
            <strong> B-Tech in Computer Science and Engineering with Data Science Specialization
</strong> (2022-2026) <br />
            <strong>C.G.P.A: 7.863</strong>
          </p>
        </div>

        {/* Right Side - My Skills */}
        <div className="about-right">
          <h2>MY SKILLS</h2>
          <div className="skills-container">
            <span className="skill">
              <img src="/html.png" alt="HTML" title="HTML" />
            </span>
            <span className="skill">
              <img src="/css.png" alt="CSS" title="CSS" />
            </span>
            {/* <span className="skill">
              <img src="/bootstrap.png" alt="Bootstrap" title="Bootstrap" />
            </span>
            <span className="skill">
              <img src="/js.png" alt="JavaScript" title="JavaScript" />
            </span> */}
            {/* <span className="skill">
              <img src="/react.png" alt="React" title="React" />
            </span> */}
            {/* <span className="skill">
              <img src="/nodejs.png" alt="Node.js" title="Node.js" />
            </span> */}
            <span className="skill">
              <img src="/git.png" alt="Git" title="Git" />
            </span>
            <span className="skill">
              <img src="/c.png" alt="C" title="C" />
            </span>
            <span className="skill">
              <img src="/python.png" alt="Python" title="Python" />
            </span>
            {/* <span className="skill">
              <img src="/java.png" alt="Java" title="Java" />
            </span> */}
            <span className="skill">
              <img src="/sql.png" alt="SQL" title="SQL" />
            </span>
            {/* <span className="skill">
              <img src="/springboot.png" alt="Spring Boot" title="Spring Boot" /> */}
            {/* </span> */}
          </div>
        </div>
        
      </div>
  <div className="experience-container">
 <h2>Position Of Responsibility</h2>
 <div className="experience-content">
   <div className="experience-item">
     <h3>Vice President of Drama and Theatre Club</h3>
  
     <p className="info">
       Served as Vice President of the Drama Club, leading and organizing drama and cinema contests with 100+ participants, while also showcasing creativity by acting in a short film.
     </p>
   </div>
 </div>
</div> 
    </div>
  );
};

export default About;