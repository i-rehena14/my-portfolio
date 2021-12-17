import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Profile.css';
import Particles from "react-tsparticles";
import { Link } from 'react-router-dom';


const Profile = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="home-container" id="home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 100,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 80,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#008B8B",//
                        },
                        links: {
                            color: "#5F9EA0",
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 700,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 6,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Navbar collapseOnSelect expand="lg" variant="light" className="header">
                <Container>
                    <Navbar.Brand href="#home" className="logo">REHENA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#portfolio">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="profile-container">
                <div className="profile-intro">
                    <h2 className="intro">Hello, I am </h2>
                    <h1 className="profile-name">Rehena Akter</h1>
                    <div className="title">
                        <div className="title-wrapper">
                            <div className="title-item">Junior Web Developer</div>
                            <div className="title-item">Junior MERN Stack Developer</div>
                            <div className="title-item">Junior Front-End Developer</div>
                            <div className="title-item">Junior React Developer</div>
                        </div>
                    </div>

                    <a href="https://drive.google.com/u/0/uc?id=1GbLwBT6GmYEIuSr1nuPuhHTMIiNjv1dJ&export=download"
                        className="btn btn-success m-4 p-2" download>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Profile;



