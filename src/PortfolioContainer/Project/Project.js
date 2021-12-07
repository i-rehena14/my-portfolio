import React from 'react';
import './Project.css';
const Project = ({ img, link }) => {
    return (
        <div className="project">
            <div className="browser">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    );
};

export default Project;