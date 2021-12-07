import React from 'react';
import './Profile.css';
const Profile = () => {
    return (
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
                <div className="description">
                    I develop services for customers specializing in creating stylish, modern websites, web services and online stores.
                </div>

            </div>
            <div className="bg"></div>
        </div>
    );
};

export default Profile;