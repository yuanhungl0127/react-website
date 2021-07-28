import React from "react";
import "./HeaderContainer.css";
import {FaLinkedinIn} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {SiGithub} from "react-icons/si";
// Photo by Ryan Hutton on Unsplash

const HeaderContainer = () => {
    return (
        <div className="ui text container myContainer">
            <h2 className="ui inverted header">
                YuanHung Lin
            </h2>
            <h3 className="ui inverted header">A software engineer</h3>
            <div className="header-community">
                <a href="https://www.instagram.com/iamyuanhung/" className="fb-icon">
                    <FiInstagram  size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/yuanhung-lin-368513176/" className="linkedin-icon">
                    <FaLinkedinIn size={30}/>
                </a>
                <a href="https://github.com/Viclin0127" className="github-icon">
                    <SiGithub size={30}/>
                </a>
            </div>
        </div>
    )
}

export default HeaderContainer;