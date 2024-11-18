import React from 'react';
import headerCSS from './../Header/Header.module.css';

import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

// importing all the images.
import headerimage1 from './../../assets/header-image-01.jpg';
import headerimage2 from './../../assets/header-image-02.jpg';
import headerimage3 from './../../assets/header-image-03.jpg';
import headerimage4 from './../../assets/header-image-04.jpg';

import headerimage5 from './../../assets/header-image-05.jpg';
import headerimage6 from './../../assets/header-image-06.jpg';
import headerimage7 from './../../assets/header-image-07.jpg';
import headerimage8 from './../../assets/header-image-08.jpg';

function Header() {
    return(
        <div className={`${headerCSS.header_wrapper} section`} id="home">

            <div className={headerCSS.social}>
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-linkedin-line"></i>
            </div>

            {/* here are the text and all the images. */}
            <Swiper className={headerCSS.swiper} speed={1500} loop={true} autoplay={{
                delay: 3600
            }} modules={[Autoplay]}>
                <SwiperSlide>
                    <div className={headerCSS.Header_slide}>
                        <div className={headerCSS.header_content}>
                            <small>One Design at a Time</small>
                            <h2>Where Ideas Take Shape <br /> and Dreams become Reality</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione officiis error sapiente fuga magnam saepe adipisci reiciendis molestiae corporis.</p>
                            <button>Let's Collaborate <i className="ri-arrow-right-up-line"></i></button>
                        </div>
                        <div className={headerCSS.header_images}>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage1} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage2} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage3} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage4} alt="header-image" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={headerCSS.slide2}>
                    <div className={headerCSS.Header_slide}>
                        <div className={headerCSS.header_content}>
                            <small>One Design at a Time</small>
                            <h2>Where Ideas Take Shape <br /> and Dreams become Reality</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione officiis error sapiente fuga magnam saepe adipisci reiciendis molestiae corporis.</p>
                            <button>Let's Collaborate <i className="ri-arrow-right-up-line"></i></button>
                        </div>
                        <div className={headerCSS.header_images}>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage5} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage6} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage7} alt="header-image" />
                            </div>
                            <div className={headerCSS.header_image}>
                                <img src={headerimage8} alt="header-image" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            
        </div>
    )
};

export default Header;