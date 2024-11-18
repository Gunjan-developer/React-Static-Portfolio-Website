import React, { useRef , useEffect } from 'react';
import navCSS from './../Nav/Nav.module.css';

import SheildTurtleIcon from './../../assets/fav.png';

function Nav() {

    const menu = useRef();
    const nav = useRef();


    // new learning for you.
    const menuHandler = () => {
        if (menu.current) {
            menu.current.classList.toggle(navCSS.showNav);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (nav.current) {
                if (window.scrollY > 100){
                    nav.current.classList.add(navCSS.navColor);
                }
                else {
                    nav.current.classList.remove(navCSS.navColor);
                }
            }
        };

        window.addEventListener('scroll' , handleScroll);

        return () => {
            window.removeEventListener('scroll' , handleScroll);
        }
    } , []);

// new learning for you.

return (
    <div className={navCSS.nav_wrapper} ref={nav}>
        <div className={navCSS.logo}>
            <img src={SheildTurtleIcon} alt="logo" id={navCSS.dlogo} />
            <a href="#">Shield Turtle</a>
        </div>
        <ul ref={menu}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#service">service</a></li>
            <li><a href="#works">works</a></li>
            <li><a href="#news">news</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
        <div className={navCSS.nav_btns}>
            <button>Why to Hire Me <i className="ri-arrow-right-up-line"></i></button>
            <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
        </div>
    </div>
)
}

export default Nav
