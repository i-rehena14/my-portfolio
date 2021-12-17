import React from 'react';

const AboutMe = () => {
    return (
        <div className='container ' id='about'>
            <h1 className="my-4 text-center" style={{ color: 'DarkSlateGrey', fontSize: '40px', fontWeight: 600 }}>About Me</h1>
            <div className="d-lg-flex">
                <div className='w-100 m-2 py-4'>
                    <h4 className='p-2' style={{ color: 'aquamarine', backgroundColor: 'DarkSlateGrey' }}>Basic Info</h4>
                    <p><b style={{ paddingRight: '55px' }}>Age : </b>22</p>
                    <p><b style={{ paddingRight: '20px' }}>Address : </b>Chittagong, Bangladesh</p>
                    <p><b style={{ paddingRight: '40px' }}>Email : </b>rehenaa14@gmail.com</p>
                    <p><b style={{ paddingRight: '35px' }}>Phone : </b>+880-1537681963</p>
                    <p><b style={{ paddingRight: '40px' }}>Study : </b>International Islamic University Chittagong</p>
                </div>
                <div className='w-100 m-2 my-4' style={{ backgroundColor: 'aquamarine', borderRadius: '5px' }}>
                    <p className='m-2 p-2 fw-light'>
                        I am a Junior MERN Stack Developer currently studing in Computer Science and Engineering. After discovering my passion for web development, I brought myself to learn about it. I made websites to practice and grow my abilities. I am looking forward to bringing my passion to be a great role in a company.</p>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;