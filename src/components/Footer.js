import React from 'react'
import {FaLinkedinIn} from "react-icons/fa";
import {SiGithub} from "react-icons/si";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">

            <div className="footer-icons">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/yuanhung-lin-368513176/" className="footer-img">
                    <FaLinkedinIn size={(window.innerWidth>=323)?35:25}/>
                </a>
                <a rel="noreferrer" target="_blank" href="https://github.com/Viclin0127" className="footer-img">
                    <SiGithub size={(window.innerWidth>=323)?35:25}/>
                </a>     
            </div>
            <div className="footer-text">
                © 2021 Created by Yuan. Pot Icon by AomAm . 
            </div>

        </div>
    )
}

export default Footer
