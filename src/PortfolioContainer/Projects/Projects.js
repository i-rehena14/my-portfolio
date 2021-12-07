import React from 'react';
import Project from '../Project/Project';
import './Projects.css';
import { projects } from '../../data';

const Projects = () => {
    return (
        <div className="pr">
            <div className="pr-texts">
                <h1 className="pr-title">
                    Create and Inspire
                </h1>
                <p className="pr-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam repellat voluptatibus perferendis eum? Dolores adipisci officia magnam! Nobis, obcaecati cumque.
                </p>
            </div>
            <div className="pr-list">
                {
                    projects.map(project => (
                        <Project
                            key={project.id}
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