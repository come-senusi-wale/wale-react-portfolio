import React, {useContext, useRef} from "react";
import {FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import { Apcontext } from "./../context";


export let Footer = () => {
    let {footerScroll} = useContext(Apcontext);

    return (
        <footer id="footer">
            <div id="footer-name">

                <h2>akinyemi saheed akinwale</h2>
                <p>I'am Akinyemi Saheed Akinwale this is my personal website</p>
                
            </div>

            <div id="footer-explore">
                <h2>explore</h2>

                <ul>
                    <li><a href="#home" data-id = "home" onClick={(e) => footerScroll(e)}>home</a></li>
                    <li><a href="#about" data-id = "about" onClick={(e) => footerScroll(e)}>about</a></li>
                    <li><a href="#skill" data-id = "skill" onClick={(e) => footerScroll(e)}>skills</a></li>
                    <li><a href="#portfolio" data-id = "portfolio" onClick={(e) => footerScroll(e)}>portfolio</a></li>
                    <li><a href="#contact" data-id = "contact" onClick={(e) => footerScroll(e)}>contact</a></li>
                </ul>
            </div>

            <div id="footer-follow">

                <h2>follow</h2>

                <div>
                    <a href="#"><FaFacebookF></FaFacebookF></a>
                    <a href="#"><FaTwitter></FaTwitter></a>
                    <a href="#"><FaLinkedinIn></FaLinkedinIn></a>
                </div>

            </div>
        </footer>
    )
}