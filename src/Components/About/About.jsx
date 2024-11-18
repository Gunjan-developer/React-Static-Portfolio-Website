import React from 'react';
import aboutCSS from './../About/About.module.css';
import profileImg from './../../assets/profile.jpg';
import about_image from './../../assets/About-img.jpg';
import photoShop from './../../assets/ph.png';
import ae from './../../assets/ae.png';
import final from './../../assets/final.png';
import award from './../../assets/award-image.jpg';

function About() {
    return (
        <div className={`${aboutCSS.About_wrapper} section`} id="about">
            <div className="Section_title">
                <p>PHOTOGRAPHY & VIDEOGRAPHY THAT SPEAKS</p>
                <h2>Hi ! I M <span>Neo</span> , A Creative Director <br /> From NYC.</h2>
            </div>

            <div className={aboutCSS.about_container}>
                <div className={aboutCSS.about_details}>
                    <h2>500+</h2>
                    <small>Projects Completed</small>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus dolores repudiandae illo accusamus recusandae quo. Consectetur quaerat voluptatibus nulla?</p>
                    <div className={aboutCSS.profile}>
                        <img src={profileImg} alt="profile-image" />
                        <i className="ri-arrow-right-up-line"></i>
                    </div>
                </div>
                <div className={aboutCSS.about_content}>
                    <div className={aboutCSS.about_image}>
                        <img src={about_image} alt="about-image" />
                        <div className={aboutCSS.about_info}>
                            <h3>Creative Director <span>Neo</span></h3>
                        </div>
                    </div>
                    <div className={aboutCSS.about_detail}>
                        <p>My Creative Toolkit</p>
                        <h3>The Tools behind <br /> Creating the Magic</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iusto rerum et nesciunt assumenda ipsam voluptas sapiente impedit harum quidem?</p>
                        <div className={aboutCSS.Tools}>
                            <div className={aboutCSS.Tool}>
                                <img src={photoShop} alt="photoshop" />
                                <p>PhotoShop <span>Advanced Post - Processing</span></p>
                            </div>
                            <div className={aboutCSS.Tool}>
                                <img src={ae} alt="ae" />
                                <p>After Effect <span>Motion Graphics and Visual Effects</span></p>
                            </div>
                            <div className={aboutCSS.Tool}>
                                <img src={final} alt="final" />
                                <p>Final Cut Pro <span>Cinematic Video Editing</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={aboutCSS.awards_container}>
                <div className={aboutCSS.awards_image}>
                    <img src={award} alt="award" />
                    <i className="ri-play-line"></i>
                </div>
                <div className={aboutCSS.awards_details}>
                    <p>Highlight & Accomplishments</p>
                    <h3>Awards & Recoginition </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iusto rerum et nesciunt assumenda ipsam voluptas sapiente impedit harum quidem?</p>
                    <div className={aboutCSS.awards_list}>
                        <p><i className="ri-trophy-line"></i> Award-winning Photography</p>
                        <p><i className="ri-trophy-line"></i> Featured in The Verse</p>
                        <p><i className="ri-trophy-line"></i> Certified Professional </p>
                        <p><i className="ri-trophy-line"></i> Collaborated With Convarse </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;