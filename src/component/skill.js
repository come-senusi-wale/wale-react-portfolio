import React, {useContext, useRef} from "react";
import port_three from './../img/port_three.jpg';

import Fade from 'react-reveal/Fade';

import { Apcontext } from "./../context";

export let Skill = () => {

    let {skill} = useContext(Apcontext);


    return(
        <section id="skill" ref={skill}>

            <Fade top>
            <div id="skill-title">
                <h2>skills</h2>
            </div>
            </Fade>

            <div id="skill-flex">

                <div id="skill-container">

                    <div id="skill-dev">

                        <Fade top>
                        <h2>web development</h2>
                        </Fade>

                        <Fade top>
                        <div>

                    
                            <p><span>html</span></p>
                            <p><span>css</span></p>
                            <p><span>javascript</span></p>
                            <p><span>jquery</span></p>
                            <p><span>typescript</span></p>
                            <p><span>react</span></p>
                            <p><span>node.js</span></p>
                            <p><span>mongo db</span></p>
                            <p><span>php</span></p>
                            <p><span>laravel</span></p>
                            <p><span>mysqli db</span></p>
                            

                        </div>
                        </Fade>
                        
                    </div>

                    <div id="skill-block">

                        <Fade top>
                        <h2>block chain</h2>
                        </Fade>

                        <Fade top>
                        <div>

                            <p><span>solidity</span></p>
                            <p><span>web3.js</span></p>
                            <p><span>truffle</span></p>
                            <p><span>metamask</span></p>
                            <p><span>ganache</span></p>
                            <p><span>infura</span></p>
                            <p><span>ethereum</span></p>
                            <p><span>BSC</span></p>
                            <p><span>rust</span></p>
                            <p><span>solana</span></p>
                            <p><span>moralis</span></p>

                        </div>
                        </Fade>

                    </div>
                </div>

                <div id="skill-img">
                    <Fade top>
                    <img src={port_three} alt="" />
                    </Fade>
                </div>

            </div>

        </section>
    )
}