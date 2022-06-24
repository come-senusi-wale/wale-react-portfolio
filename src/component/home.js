import React, {useContext, useRef} from "react";
import akin from './../img/akin.jpg';

import { FaArrowLeft } from "react-icons/fa";

import Fade from 'react-reveal/Fade';

import { Apcontext } from "./../context";

export let Home = () => {

    let {home, scrolldownArrow} = useContext(Apcontext);


    return(

        <section id="home" ref={home}>

            <section>

                <Fade top>

                    <div id="hello">
                        <h2>he <br /> llo.</h2>
                    </div>

                </Fade>

                <Fade right>

                    <div id="img">
                        <img src={akin} alt=""  />
                    </div>
                    
                </Fade>
                

            </section>

            
                <div id="side">
                <Fade right>
                <a href="#about" data-id="about" onClick={(e) => scrolldownArrow(e)}><span className="arror"><FaArrowLeft></FaArrowLeft></span> <span>scroll down</span></a>
                </Fade>
                </div>
            
        </section>
    )
}