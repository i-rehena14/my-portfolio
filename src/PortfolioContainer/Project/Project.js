import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import './Project.css';
const Project = ({ name, img, link, github, details }) => {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div className="project">
            <div className="browser d-flex justify-content-between">
                <div className="d-flex">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                {values.map((v, idx) => (
                    <Button key={idx} variant="outline-secondary" size="sm" className="me-2" onClick={() => handleShow(v)}>
                        Details
                        {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                ))}
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton style={{ backgroundColor: 'SlateGrey', color: 'white' }}>
                        <Modal.Title style={{ fontFamily: 'cursive' }}>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'PowderBlue' }}>
                        <div>
                            {details}
                        </div>
                        <br />
                        <a href={link} target="_blank" rel="noreferrer"><Button className="me-4 fw-bold" variant="outline-info">Live Site</Button></a>
                        <a href={github} target="_blank" rel="noreferrer"><Button className="fw-bold" variant="outline-secondary">Github</Button></a>
                    </Modal.Body>
                </Modal>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>

        </div>
    );
};

export default Project;