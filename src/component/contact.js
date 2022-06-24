import React, {useContext, useRef} from "react";

import Fade from 'react-reveal/Fade';

import { Apcontext } from "./../context";


export let Contact = () => {

    let {contact} = useContext(Apcontext);

    return(
        <section id="contact" ref={contact}>

            <Fade top>
            <div id="contact-title">
                <h2>contact</h2>
            </div>
            </Fade>

            <div id="contact-container">
                
                <div id="contact-info">
                    <Fade top>
                    <div className="info">
                        <h3>email</h3>
                        <p>akinyemisaheedwale@gmail.com</p>
                    </div>

                    <div className="info">
                        <h3>phone</h3>
                        <p>+2348104322128</p>
                    </div>

                    <div className="info">
                        <h3>address</h3>
                        <p>Ojede Ankpa</p>
                    </div>
                    </Fade>

                </div>

                <div className="msg">

                    <Fade top>
                    <div className="name">

                        <div><input type="text" placeholder="name" /></div>
                        
                        <div><input type="text"  placeholder="email"/></div>
                    </div>

                    <textarea id="" cols="30" rows="10" placeholder="message"></textarea>

                    <div id="submit">
                        <button>submit</button>
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}