import React from 'react';
import newsCSS from './../News/News.module.css';

// importing the images from here :
import news_pic01 from './../../assets/blog01.jpg';
import news_pic02 from './../../assets/blog02.jpg';
import news_pic03 from './../../assets/blog03.jpg';

function News() {
    return(
        <div className={`${newsCSS.news_Wrapper} section`} id="news">
            <div className="Section_title">
                <p>Explore The Latest Updates</p>
                <h2>The Latest News and Creative <br /> Updates from my Journey</h2>


                <div className={newsCSS.news_cards}>
                    <div className={newsCSS.card}>
                        <img src={news_pic01} alt="news-image" />

                        <div className={newsCSS.news_content}>
                            <p>Lifestyle</p>
                            <h3>The magic of Golden <br /> Hour Photography</h3>

                            <div className={newsCSS.profile}>
                                <i className="ri-user-line"></i>
                                <small>Siska Maenda</small>
                                <i className="ri-time-line"></i>
                                <small>2 Hours Ago</small>
                            </div>
                        </div>
                    </div>

                    <div className={newsCSS.card}>
                        <img src={news_pic02} alt="news-image" />

                        <div className={newsCSS.news_content}>
                            <p>Tips and Tricks</p>
                            <h3>Cinematic Brand <br /> Video fro Creative</h3>

                            <div className={newsCSS.profile}>
                                <i className="ri-user-line"></i>
                                <small>Joey Doe</small>
                                <i className="ri-time-line"></i>
                                <small>5 Hours Ago</small>
                            </div>
                        </div>
                    </div>

                    <div className={newsCSS.card}>
                        <img src={news_pic03} alt="news-image" />

                        <div className={newsCSS.news_content}>
                            <p>Insighs</p>
                            <h3>Top Grar Picks<br /> for Professional</h3>

                            <div className={newsCSS.profile}>
                                <i className="ri-user-line"></i>
                                <small>Siska Maenda</small>
                                <i className="ri-time-line"></i>
                                <small>2 Hours Ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default News;