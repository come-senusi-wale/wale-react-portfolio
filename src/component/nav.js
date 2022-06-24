import React, {useContext, useRef} from "react";
import { FaAlignJustify } from "react-icons/fa";

import { Apcontext } from "./../context";


export let Nav = () => {

    //console.log(useContext(Apcontext))

    let {isSidebarOpen, setIsSidebarOpen, nav, pageScrollBig,  homepageScrollBig, homeRef, aboutRef, skillRef, portfolioRef, contactRef,} = useContext(Apcontext);




    return(
        <nav id="nav" ref={nav}>

            <div id="logo">
                <h2 data-id="home"  onClick={(e) => homepageScrollBig(e)}>akin dev</h2>
            </div>

            <div id="link">
                <ul>
                    <li className="show-page" ref={homeRef}><a href="#home" onClick={(e) => pageScrollBig(e)} data-id="home">home</a></li>
                    <li ref={aboutRef}><a href="#about" onClick={(e) => pageScrollBig(e)} data-id="about">about</a></li>
                    <li ref={skillRef}><a href="#skill" onClick={(e) => pageScrollBig(e)} data-id="skill">skills</a></li>
                    <li ref={portfolioRef}><a href="#portfolio" onClick={(e) => pageScrollBig(e)} data-id="portfolio">portfolio</a></li>
                    <li ref={contactRef}><a href="#contact" onClick={(e) => pageScrollBig(e)} data-id="contact">contact</a></li>
                </ul>
            </div>

            <div id="toggle-icon">
                <h2 onClick={() => setIsSidebarOpen(!isSidebarOpen)}><FaAlignJustify></FaAlignJustify></h2>
            </div>
            
        </nav>
    )
}