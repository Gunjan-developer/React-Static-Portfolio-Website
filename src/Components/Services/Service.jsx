import React from 'react';
import serviceCSS from './../Services/Service.module.css';

// importing all the images here 
import serviceBg from './../../assets/Service-bg.jpg';
import gallery01 from './../../assets/Gallery01.jpg';
import gallery02 from './../../assets/Gallery02.jpg';
import gallery03 from './../../assets/Gallery03.jpg';
import gallery04 from './../../assets/Gallery04.jpg';
import gallery05 from './../../assets/Gallery05.jpg';

function Service() {
    return (
        <div className={`${serviceCSS.Service_wrapper} section`} id="service">
            <div className="Section_title">
                <p>PHOTOGRAPHY & VIDEOGRAPHY THAT REFLECTS YOUR VISION</p>
                <h2>Services That <span>Transform Your Precious</span>  <br /> moments into timeless visual art</h2>
            </div>


            <div className={serviceCSS.service_container}>
                <img src={serviceBg} alt="service-bg" />

                <div className={serviceCSS.service_content}>
                    <small><i className="ri-video-on-ai-line"></i> Relive for Years</small>

                    <div className={serviceCSS.service_info}>
                        <div className={serviceCSS.content_wrapper}>
                            <h2>Wedding Photography <br /> and Videography</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit optio quasi iure ut, esse laboriosam reiciendis pariatur autem perferendis aliquid facilis tempora error corrupti ipsum ex ullam dolorum veniam?</p>
                        </div>
                        <div className={serviceCSS.content_wrapper}>
                            <h3>How do I Book a Session ?</h3>
                            <p>You can book a session by contacting me through the website's Contact form.</p>
                            <h3>Do you Travel for Shoots ?</h3>
                            <p>Travel Fees may apply depending on the Location.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={serviceCSS.Gallery} id="works">
                <div className={serviceCSS.gallery_img} count="01">
                    <img src={gallery01} alt="service-gallery-images" />
                </div>
                <div className={serviceCSS.gallery_img} count="02">
                    <img src={gallery02} alt="service-gallery-images" />
                </div>
                <div className={serviceCSS.gallery_img} count="03">
                    <img src={gallery03} alt="service-gallery-images" />
                </div>
                <div className={serviceCSS.gallery_img} count="04">
                    <img src={gallery04} alt="service-gallery-images" />
                </div>
                <div className={serviceCSS.gallery_img} count="05">
                    <img src={gallery05} alt="service-gallery-images" />
                </div>
            </div>

        </div>
    )
};

export default Service;