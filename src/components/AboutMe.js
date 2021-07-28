import React from "react";
import { aboutMeContents } from "./AboutMeContent";
import "./AboutMe.css";
import me from "../images/me.JPG";

const AboutMe = () => {
    return (
        <div id="about-me" className="ui grid container" style={{padding:"8em 0em"}}>
            <div id="intro" className="row">
                <div className="four wide column about-me-header">
                    <h1 id="intro-header" className="ui header">
                    <span className="header-border">About Me</span>
                    </h1>
                </div>
                <div className={(window.innerWidth>=670)?"six wide column":"ten wide column"}>
                    <p className="intro-content">{aboutMeContents.introduction}</p>
                    <div>
                        <h3 className="contact-details">Contact Details</h3>
                        <p className="intro-content">+61 0423876592</p>
                        <p className="intro-content">vicclaire0509@gmail.com</p>
                    </div>
                </div>
                <div id="intro-img" className="four wide right floated column">
                    <img src={me} alt="intro"/>
                </div>
            </div>
            <div id="edu" className="row" style={{marginTop:"30px", borderTop:"1px solid lightgrey", padding: "20px 0"}}>
                <div className="four wide column about-me-header">
                    <h1 id="intro-header" className="ui header">
                    <span className="header-border">Skills</span>
                    </h1>
                </div>
                <div id="skill-container" className={(window.innerWidth>=670)?"eight wide column":"ten wide column"}>
                    {aboutMeContents.skills.map((skill,index)=>{
                        return (
                            <div key={index} className="skill-item">
                                {skill.icon}
                                <p className="skill-content intro-content">{skill.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id="education" className="row" style={{marginTop:"30px", borderTop:"1px solid lightgrey", padding: "20px 0"}}>
                <div className="four wide column about-me-header">
                    <h1 id="intro-header" className="ui header">
                    <span className="header-border">Education</span>
                    </h1>
                </div>
                <div className="ten wide column">
                    <p className="edu-content intro-content"><span style={{fontWeight: "bold", color: "black"}}> # Master of Information Technology </span>/ University of Melbourne / 2020~2021</p>
                    <p className="edu-content intro-content"><span style={{fontWeight: "bold", color: "black"}}> # Bachelor of Risk Management </span>/ National ChengChi University (Taiwan) / 2009~2013</p>
                </div>
            </div>
            <div id="experience" className="row" style={{marginTop:"30px", borderTop:"1px solid lightgrey", padding: "20px 0"}}>
                <div className="four wide column about-me-header">
                    <h1 id="intro-header" className="ui header">
                    <span className="header-border">Experience</span>
                    </h1>
                </div>
                <div className="ten wide column">
                    <p className="work-content intro-content"><span style={{fontWeight: "bold", color: "black"}}> # Web developer - Internship </span>/ Vmor Technology (Sydney) / 2021 Mar ~ 2021 June</p>
                    <p className="work-content intro-content"><span style={{fontWeight: "bold", color: "black"}}> # Risk specialist </span>/ Cathay Financial Holding Company (Taiwan) / 2014 Sep ~ 2019 Mar</p>
                    <p className="work-content intro-content"><span style={{fontWeight: "bold", color: "black"}}> # Internship </span>/ Fubon Financial Holding Company (Taiwan) / 2013 Jul ~ 2013 Sep</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;