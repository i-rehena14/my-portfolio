import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Profile.css';
const Profile = () => {
    return (
        <div className="home-container" id="home">

            <Navbar collapseOnSelect expand="lg" variant="light" className="header">
                <Container>
                    <Navbar.Brand href="#home" className="logo">REHENA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#portfolio">Projects</Nav.Link>
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
                {/* <div className="bg"></div> */}
            </div>
        </div>
    );
};

export default Profile;