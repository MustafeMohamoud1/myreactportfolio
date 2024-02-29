import React from 'react';
import '../App.css';

const ProjectBox = ({ title, imageSrc }) => (
  <div className="project-box">
    <img src={imageSrc} alt={title} />
    <h3>{title}</h3>
  </div>
);

const Portfolio = () => {
  const projects = [
    { title: 'JB Travel Blog', imageSrc: '/JBTravelBlog.png' },
    { title: 'Workday Planner', imageSrc: '/WorkdayPlanner.png' },
    { title: 'Coding Quiz', imageSrc: '/CodingQuiz.png' },
    { title: 'Password Generator', imageSrc: '/PasswordGenerator.png' },
    { title: 'Project 5', imageSrc: '/project2.jpg' },
    { title: 'Project 6', imageSrc: '/project2.jpg' },
  ];

  return (
    <div id="portfolio" className="section">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <ProjectBox key={index} title={project.title} imageSrc={project.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;