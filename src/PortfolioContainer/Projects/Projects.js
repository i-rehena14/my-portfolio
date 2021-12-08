import React from 'react';
import Project from '../Project/Project';
import './Projects.css';
import { projects } from '../../data';

const Projects = () => {
    return (
        <div className="pr" id="portfolio">
            <div className="pr-texts">
                <h1 className="pr-title">
                    My Projects
                </h1>

            </div>
            <div className="pr-list">
                {
                    projects.map(project => (
                        <Project
                            key={project.id}
                            name={project.name}
                            img={project.img}
                            link={project.link}
                        ></Project>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;