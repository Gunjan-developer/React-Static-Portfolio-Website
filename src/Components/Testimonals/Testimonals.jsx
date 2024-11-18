import React from 'react';
import testimonalsCSS from './../Testimonals/Testimonals.module.css';
// import { Swiper , SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Testimonals() {
    return (
        <div className={`${testimonalsCSS.testiomonals_Wrapper} section`}>
            <div className="Section_title">
                <p>A Visual Journey</p>
                <h2>Stories in Motion</h2>
            </div>

            {/* <Swiper className={testimonalsCSS.swiper} modules={[Autoplay]} autoplay={{ delay : 2500 , }} slidesPerView={3} spaceBetween={30}>
                <SwiperSlide>
                    <div className={testimonalsCSS.Testimonial}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam, quibusdam explicabo reprehenderit tempore eos asperiores deserunt consequatur dicta a, quasi quam maxime numquam animi facilis. Laborum sit, necessitatibus sapiente voluptates quasi atque hic?</p>

                        <div className={testimonalsCSS.testimonal_profile}>
                            <i className="ri-user-line"></i>
                            <span>Lisa Johnson</span>

                            <i className="ri-briefcase-4-line"></i>
                            <span>Web Journalist</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonalsCSS.Testimonial}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam, quibusdam explicabo reprehenderit tempore eos asperiores deserunt consequatur dicta a, quasi quam maxime numquam animi facilis. Laborum sit, necessitatibus sapiente voluptates quasi atque hic?</p>

                        <div className={testimonalsCSS.testimonal_profile}>
                            <i className="ri-user-line"></i>
                            <span>Lisa Johnson</span>

                            <i className="ri-briefcase-4-line"></i>
                            <span>Web Journalist</span>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper> */}

            <Swiper
                className={testimonalsCSS.swiper}
                modules={[Autoplay]}
                autoplay={{ delay: 2500 }}
                slidesPerView={3}
                spaceBetween={30} loop={true}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView : 2,
                    },
                    1024 : {
                        slidesPerView : 3
                    }
                }}
            >
                <SwiperSlide>
                    <div className={testimonalsCSS.Testimonial}>
                        <p>
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                            aperiam, quibusdam explicabo reprehenderit tempore eos asperiores
                            deserunt consequatur dicta a, quasi quam maxime numquam animi
                            facilis. Laborum sit, necessitatibus sapiente voluptates quasi atque
                            hic? "
                        </p>
                        <div className={testimonalsCSS.testimonal_profile}>
                            <i className="ri-user-line"></i>
                            <span>Lisa Johnson</span>
                            <i className="ri-briefcase-4-line"></i>
                            <span>Web Journalist</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonalsCSS.Testimonial}>
                        <p>"
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                            aperiam, quibusdam explicabo reprehenderit tempore eos asperiores
                            deserunt consequatur dicta a, quasi quam maxime numquam animi
                            facilis. Laborum sit, necessitatibus sapiente voluptates quasi atque
                            hic? "
                        </p>
                        <div className={testimonalsCSS.testimonal_profile}>
                            <i className="ri-user-line"></i>
                            <span>Young Gross</span>
                            <i className="ri-briefcase-4-line"></i>
                            <span>Web Journalist</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={testimonalsCSS.Testimonial}>
                        <p>"
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                            aperiam, quibusdam explicabo reprehenderit tempore eos asperiores
                            deserunt consequatur dicta a, quasi quam maxime numquam animi
                            facilis. Laborum sit, necessitatibus sapiente voluptates quasi atque
                            hic? "
                        </p>
                        <div className={testimonalsCSS.testimonal_profile}>
                            <i className="ri-user-line"></i>
                            <span>Rudolph Jenkins</span>
                            <i className="ri-briefcase-4-line"></i>
                            <span>Podcaster</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={testimonalsCSS.Testimonial}>
                        <p>"
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                            aperiam, quibusdam explicabo reprehenderit tempore eos asperiores
                            deserunt consequatur dicta a, quasi quam maxime numquam animi
                            facilis. Laborum sit, necessitatibus sapiente voluptates quasi atque
                            hic? "
                        </p>
                        <div className={testimonalsCSS.testimonal_profile}>
                            <i className="ri-user-line"></i>
                            <span>Rudolph Jenkins</span>
                            <i className="ri-briefcase-4-line"></i>
                            <span>Podcaster</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Testimonals;