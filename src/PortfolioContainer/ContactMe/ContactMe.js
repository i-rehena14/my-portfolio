import React, { useRef, useState } from 'react';
import './ContactMe.css';
import phone from '../../images/phone5.png';
import email from '../../images/gmail.png';
import address from '../../images/address2.png';
import emailjs from 'emailjs-com';


const ContactMe = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ct961gm',
            'template_3qzz11f',
            formRef.current,
            'user_VCaGmcTWBWE58PZhQJgdV')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        Let's Discuss your Projects
                    </h1>
                    <div className="contact-info">
                        <div className="info-item">
                            <img src={phone} alt="" className="icon" />
                            +880-012345577
                        </div>
                        <div className="info-item">
                            <img src={email} alt="" className="icon" />
                            rehenaa14@gmail.com
                        </div>
                        <div className="info-item">
                            <img src={address} alt="" className="icon" />
                            Chittagong, Bangladesh
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="desc">
                        <b>Whats your story? </b>Get In touch. Always freelancing if the right project comes along to me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="email" placeholder="Email" name="user_email" />
                        <textarea name="message" placeholder="Message" rows="5"></textarea>
                        <button>Submit</button>
                        {done &&
                            alert('Thanks you!!')
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;