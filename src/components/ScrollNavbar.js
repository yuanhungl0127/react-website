import React from "react";
import "./ScrollNavbar.css";

const ScrollNavbar = (state) =>{
    const HEADERHEIGHT = 700;

    // Redirect to my resume
    const redirectResume = ()=>{
        document.location.href = "";
    }

    return (
        <div className={(state.scrollY >=HEADERHEIGHT)?"scroll-NavbarItems active":"scroll-NavbarItems"}>
            <ul className="scroll-nav-menu">
                <li><a className="scroll-nav-link">Home</a></li>
                <li><a className="scroll-nav-link">About Me</a></li>
                <li><a className="scroll-nav-link">Experience</a></li>
                <li><a className="scroll-nav-link">Education</a></li>
            </ul>
            <div className="ui button nav-btn" onClick={redirectResume}>
                RESUME
                <i style={{paddingLeft:"10px"}} className="fa fa-download"/>
            </div>
        </div>
    )

}

export default ScrollNavbar;