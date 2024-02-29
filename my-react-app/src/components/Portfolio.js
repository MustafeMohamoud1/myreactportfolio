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
    { title: 'JB Travel Blog', imageSrc: '/JBTravelBlog.png', link: 'https://jbtravelblogfinal-84a20cc94acf.herokuapp.com'},
    { title: 'Workday Planner', imageSrc: '/WorkdayPlanner.png', link: 'https://mustafemohamoud1.github.io/work-schedule-planner'},
    { title: 'Coding Quiz', imageSrc: '/CodingQuiz.png', link: 'https://mustafemohamoud1.github.io/my-coding-quiz'},
    { title: 'Password Generator', imageSrc: '/PasswordGenerator.png', link: 'https://mustafemohamoud1.github.io/mustafe-password-generator'},
    { title: 'Project 5', imageSrc: '/project2.jpg', link: ''},
    { title: 'Project 6', imageSrc: '/project2.jpg', link: ''},
  ];

  return (
    <div id="portfolio" className="section">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imageSrc} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;