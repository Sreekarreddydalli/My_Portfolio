import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Car Rental Management System (Python, SQL)',
description:
  'Developed a console-based car rental system with role-based access for Owners, Employees, and Customers. Features include secure login, car inventory management, customer/employee registration, and rental operations using Python and SQLite for backend database management.',
tools: 'Python, SQLite, DB Browser for SQLite',
details: [
  'Implemented secure login and authentication for multiple user roles.',
  'Designed normalized database schema for efficient data storage and retrieval.',
  'Automated rental operations including booking, return, and availability checks.',
  'Improved usability with structured menus and error handling.',
],
    github: 'https://github.com/example/herhealthhub', // GitHub link
    live: 'https://example.com/herhealthhub', // Live project link
  },
  {
    title: 'Recommendation System for Movies (Python Programming)',
description:
  'Implemented a movie recommendation system using collaborative and content-based filtering. Analyzed user ratings and movie metadata to generate personalized suggestions and enhance user engagement.',
tools: 'Python, Pandas, Scikit-learn, NumPy, Matplotlib',
details: [
  'Built collaborative filtering models using user–item interactions.',
  'Applied content-based filtering leveraging movie genres and metadata.',
  'Preprocessed and visualized rating distributions using Pandas and Matplotlib.',
  'Improved recommendation accuracy by tuning similarity measures and evaluation metrics.',
],
    github: 'https://github.com/example/lung-cancer-prediction',
    live: 'https://example.com/lung-cancer-prediction',
  },
  {
    title: 'Library Management System (SQL)',
    description:
      'Developed a comprehensive SQL-based database system to efficiently manage and track books, authors, borrowers, and loan transactions.',
    tools: 'MySQL, PHP, HTML, CSS',
    details: [
      'Optimized library operations and resource management by 70%.',
      'Streamlined book borrowing and return processes.',
    ],
    github: 'https://github.com/example/library-management-system',
    live: 'https://example.com/library-management-system',
  },
  {
    title: 'Hospital Management System (C Programming)',
    description:
      'Built a hospital management system that organized 2,000+ patient records, improved staff scheduling by 30%, and made inventory tracking 40% more accurate, boosting overall efficiency and patient care.',
    tools: 'C Programming, File Handling, Data Structures',
    details: [
      'Organized 2,000+ patient records efficiently.',
      'Improved staff scheduling by 30%.',
      'Enhanced inventory tracking accuracy by 40%.',
    ],
    github: 'https://github.com/example/hospital-management-system',
    live: 'https://example.com/hospital-management-system',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleOpen = (index) => {
    setActiveProject(index);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  return (
    <div id="projects" className="projects-section"> {/* Added id="projects" */}
      <h2 className="projects-title">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button className="three-dots-button" onClick={() => handleOpen(index)}>
                &#x22EE; {/* Vertical Ellipsis (Three Dots) */}
              </button>
            </div>

            {activeProject === index && (
              <div className="project-modal" onClick={handleClose}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
                >
                  <button className="close-button" onClick={handleClose}>
                    &times; {/* Close Button */}
                  </button>
                  <h3>{project.title}</h3>
                  <p><strong>Tools:</strong> {project.tools}</p>
                  <ul>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                </div>
              </div>
            )}

            {/* GitHub and External Link Icons */}
            <div className="project-icons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src="/github-logo.png" alt="GitHub" className="icon-image" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src="/external-link.png" alt="External Link" className="icon-image" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;