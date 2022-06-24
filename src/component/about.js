import React, {useRef, useContext, useEffect} from "react";
import {FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

import akin from './../img/akin.jpg';

import { Apcontext } from "./../context";

export let About = () => {

    let {about} = useContext(Apcontext);

    

    

    return(
        
        <section id="about" ref={about}>

            <Fade top>
            <div className="about-title">
                <h2>about</h2>
            </div>
            </Fade>
            

            <div id="about-flex">

                <Fade top>
                <div id="about-img">
                    <img src={akin} alt="" />
                </div>
                </Fade>

                <div id="about_des_container">

                    <Fade top>
                    <div id="about-decription">

                        <h3>I'am Akinyemi Saheed Akinwale</h3>

                        <p>full stack developer</p>
                        <p>&</p>
                        <p>block chain developer</p>

                        </div>

                        <div id="about-text">
                        <p>I'm an experienced software engineer who constantly seeks out innovative solution to everyday problems. In four years in this industry, I've honed my analytical thinking and collaboraation skill, and  I love working with team.</p>
                        <p>Before my current career as a block chain and web3 developer, I was fullstack developer who has worked on many projects like school management system, blogs, hospital management system and hotel management system.</p>
                        </div>

                        <div id="about-icon">
                        <a href="#"><FaGithub></FaGithub></a>
                        <a href="#"><FaFacebookF></FaFacebookF></a>
                        <a href="#"><FaLinkedinIn></FaLinkedinIn></a>

                    </div>
                    </Fade>
                </div>

            </div>
        </section>
        
    )
}