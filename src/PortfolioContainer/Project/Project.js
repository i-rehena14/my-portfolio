import { Button } from 'react-bootstrap';
import React from 'react';
import './Project.css';
const Project = ({ name, img, link }) => {
    return (
        <div className="project">
            <div className="browser">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
                <div className="info">
                    <h2>{name}</h2>
                    <a href="#" className="btn">Details</a>
                    <a href="#" className="btn">Details</a>
                    <a href="#" className="btn">Details</a>
                </div>
            </a>

        </div>
    );
};

export default Project;