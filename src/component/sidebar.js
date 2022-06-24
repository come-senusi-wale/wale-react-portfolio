import React, {useContext} from "react";

import { Apcontext } from "./../context";

export let Sidebar = () => {

    let {isSidebarOpen, setIsSidebarOpen, closeSidebar} = useContext(Apcontext);

    

    return(
        <section id="sidebar" className={isSidebarOpen ? 'show_sidebar' : ''}>
            <div>
                <ul>
                    <li><a href="#home" onClick={(e) => closeSidebar(e)} data-id="home">home</a></li>
                    <li><a href="#about" onClick={(e) => closeSidebar(e)} data-id="about">about</a></li>
                    <li><a href="#skill" onClick={(e) => closeSidebar(e)} data-id="skill">skills</a></li>
                    <li><a href="#portfolio" onClick={(e) => closeSidebar(e)} data-id="portfolio">portfolio</a></li>
                    <li><a href="#contact" onClick={(e) => closeSidebar(e)} data-id="contact">contact</a></li>
                </ul>
            </div>
        </section>
    )
}