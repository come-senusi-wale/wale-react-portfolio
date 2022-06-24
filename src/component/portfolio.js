import React, {useContext, useRef} from "react";

import Fade from 'react-reveal/Fade';

import port_one from "./../img/port_one.jpg";
import port_twe from "./../img/port_twe.jpg";
import port_thir from "./../img/port_thir.jpg";
import port_seven from "./../img/port_seven.jpg";
import port_five from "./../img/port_five.png";
import port_fourteen from "./../img/port_fouteen.jpg";

import { Apcontext } from "./../context";

export let Portfolio = () => {

    let {portfolio} = useContext(Apcontext);


    return(

        <section id="portfolio" ref={portfolio}>

            <Fade top>
            <div id="portfolio-title">
                <h2>portfolio</h2>
            </div>
            </Fade>

            <div id="portfolio-container">

                <Fade top>

                <div className="portfolio-container">
                    <img src={port_one} alt="" />

                    <div className="portfolio-detail">
                        <a href="http://akinwallet.great-site.net/?i=1" target="_blank">view detail</a>
                    </div>
                </div>

                <div className="portfolio-container">
                    <img src={port_twe} alt="" />

                    <div className="portfolio-detail">
                        <a href="#">view detail</a>
                    </div>
                </div>

                <div className="portfolio-container">
                    <img src={port_thir} alt="" />

                    <div className="portfolio-detail">
                        <a href="#">view detail</a>
                    </div>
                </div>

                <div className="portfolio-container">
                    <img src={port_seven} alt="" />

                    <div className="portfolio-detail">
                        <a href="#">view detail</a>
                    </div>
                </div>

                <div className="portfolio-container">
                    <img src={port_five} alt="" />

                    <div className="portfolio-detail">
                        <a href="#">view detail</a>
                    </div>
                </div>

                <div className="portfolio-container">
                    <img src={port_fourteen} alt="" />

                    <div className="portfolio-detail">
                        <a href="#">view detail</a>
                    </div>
                </div>
                
                </Fade>

            </div>
            
        </section>
    )
}