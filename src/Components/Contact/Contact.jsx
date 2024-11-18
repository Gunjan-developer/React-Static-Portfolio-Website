import React from 'react';
import contactCSS from './../Contact/Contact.module.css';

// From here importing the images;
import contactImg from './../../assets/contact-bg.jpg';

function Contact() {
    return (
        <div className={`${contactCSS.Contact_wrapper} section`} id="contact">
            <div className="Section_title">
                <p>Contact me For Your <br /> Next Creative Project !!</p>
                <h2>Let's Work Together</h2>
            </div>

            <div className={contactCSS.contact_container}>
                <div className={contactCSS.contact_image}>
                    <img src={contactImg} alt="contact-image" />
                </div>
                <div className={contactCSS.contact_details}>
                    <div className={contactCSS.detail_wrapper}>
                        <div className={contactCSS.detail}>
                            <i className="ri-building-line"></i>
                            <p>1529 Trymore Road Waterville , Minnesota</p>
                        </div>

                        <div className={contactCSS.detail}>
                            <i className="ri-mail-line"></i>
                            <p>example@gmail.com</p>
                        </div>

                        <div className={contactCSS.detail}>
                            <i className="ri-time-line"></i>
                            <p>10:00 AM - 05:00 PM</p>
                        </div>
                    </div>
                    <div className={contactCSS.form}>
                        <h3>Get in Touch</h3>
                        <div className={contactCSS.input_container}>
                            <div className={contactCSS.input_wrapper}>
                                <input type="text" placeholder='Enter Name' />
                            </div>

                            <div className={contactCSS.input_wrapper}>
                                <input type="email" placeholder='Enter Email' />
                            </div>
                        </div>

                        <div className={contactCSS.input_wrapper}>
                            <input type="text" placeholder='Enter Phone' />
                        </div>

                        <textarea  placeholder="Message" cols={100}></textarea>

                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;