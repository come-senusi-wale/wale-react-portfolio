import React, { useState, useContext, useRef, useEffect} from "react";

export let Apcontext = React.createContext();


export let AppProvider = ({children}) => {

    // set useref for page:::::::::::::::::::
    let home = useRef(null);
    let about = useRef(null);
    let skill = useRef(null);
    let portfolio = useRef(null);
    let contact = useRef(null);
    let nav = useRef(null);
    let homeRef = useRef(null);
    let aboutRef = useRef(null);
    let skillRef = useRef(null);
    let portfolioRef = useRef(null);
    let contactRef = useRef(null);
    

    let refArray = [home, about, skill, portfolio, contact];

    let showarray = [homeRef, aboutRef, skillRef, portfolioRef, contactRef];

    let [isSidebarOpen, setIsSidebarOpen] = useState(false);


        // function for closing side bar and scrolling pages :::::::::::::::::::::::::

        let closeSidebar = (e) => {
            e.preventDefault();
            
            let id = e.target.getAttribute('data-id')
            //console.log(home.current)

            refArray.forEach((ref) => {

                //console.log(ref.current.id);
                let element = ref.current;
                
                if (id == element.id) {

                    //console.log(nav.current);

                    let navElement = nav.current;

                    let navElementHeight = navElement.getBoundingClientRect().height;
                    //console.log(navElementHeight);

                    let elementTop = element.offsetTop;
                    //console.log(elementTop);

                    let elementScrollPos = elementTop - navElementHeight;

                    //console.log(elementScrollPos);
                    /*window.scrollTo({
                        left: 0,
                        top: elementScrollPos
                    });*/

                    window.scroll({
                        top: elementScrollPos,
                        behavior: "smooth"
                      });
            
                    
                }else{
                   
                }
            })
            
            setIsSidebarOpen(!isSidebarOpen)
        }





        // function for scrolling pages on big screen ::::::::::::::::



        let pageScrollBig = (e) => {
            e.preventDefault();
            
            showarray.forEach((link) => {

                link.current.classList.remove('show-page');
            })

            e.target.parentNode.classList.add('show-page');

            let id = e.target.getAttribute('data-id')

            refArray.forEach((ref) => {

                let element = ref.current;
                
                if (id == element.id) {

                    let navElement = nav.current;

                    let navElementHeight = navElement.getBoundingClientRect().height;
                    
                    let elementTop = element.offsetTop;

                    let elementScrollPos = elementTop - navElementHeight;


                    window.scroll({
                        top: elementScrollPos,
                        behavior: "smooth"
                    });

                   
            
                    
                }else{
                   
                }
            })
            
           
        }




        // function for  scroll down arrow :::::::::::::::::::::::


        let scrolldownArrow = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            showarray.forEach((link) => {

                link.current.classList.remove('show-page');
            })

            aboutRef.current.classList.add('show-page');

            //e.target.parentNode.classList.add('show-page');

            let id = e.currentTarget.getAttribute('data-id')
            //console.log(e.currentTarget);
            //console.log(id);


            refArray.forEach((ref) => {

                let element = ref.current;
                
                if (id == element.id) {

                    let navElement = nav.current;

                    let navElementHeight = navElement.getBoundingClientRect().height;
                    
                    let elementTop = element.offsetTop;

                    let elementScrollPos = elementTop - navElementHeight;


                    window.scroll({
                        top: elementScrollPos,
                        behavior: "smooth"
                      });
            
                    
                }else{
                   
                }
            })
            
           
        }


        // function for scroll from footer ::::::::::::::

        let footerScroll = (e)=> {
            e.preventDefault();

            let id = e.currentTarget.getAttribute('data-id');

            showarray.forEach((link) => {

                link.current.classList.remove('show-page');
            })

            showarray.forEach((ele) => {

                //console.log(ele.current.textContent);

                if (ele.current.textContent == id) {
                    
                    ele.current.classList.add('show-page');
                    
                }
            })

            refArray.forEach((ref) => {

                let element = ref.current;
                
                if (id == element.id) {

                    let navElement = nav.current;

                    let navElementHeight = navElement.getBoundingClientRect().height;
                    
                    let elementTop = element.offsetTop;

                    let elementScrollPos = elementTop - navElementHeight;


                    window.scroll({
                        top: elementScrollPos,
                        behavior: "smooth"
                      });
            
                    
                }else{
                   
                }
            })
           

        }





        // function for home scroll :::::::::::

        let  homepageScrollBig = (e) => {

            e.preventDefault();
            e.stopPropagation();
            
            showarray.forEach((link) => {

                link.current.classList.remove('show-page');
            })

            homeRef.current.classList.add('show-page');

            //e.target.parentNode.classList.add('show-page');

            let id = e.currentTarget.getAttribute('data-id')
            //console.log(e.currentTarget);
            //console.log(id);


            refArray.forEach((ref) => {

                let element = ref.current;
                
                if (id == element.id) {

                    let navElement = nav.current;

                    let navElementHeight = navElement.getBoundingClientRect().height;
                    
                    let elementTop = element.offsetTop;

                    let elementScrollPos = elementTop - navElementHeight;


                    window.scroll({
                        top: elementScrollPos,
                        behavior: "smooth"
                      });
            
                    
                }else{
                   
                }
            })
            

        }

   
    

    return(
        <Apcontext.Provider value={{isSidebarOpen, setIsSidebarOpen, home, about, skill, portfolio, contact, closeSidebar, pageScrollBig, scrolldownArrow, footerScroll,  homepageScrollBig, nav, homeRef, aboutRef, skillRef, portfolioRef, contactRef}}>
            
            {children}
        </Apcontext.Provider>
    )

}