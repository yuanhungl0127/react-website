import React from "react";
import { aboutMeContents } from "./AboutMeContent";

const AboutMe = () => {
    return (
        <div className="ui grid container" style={{padding:"8em 0em"}}>
            <div className="row">
                <div className="ten wide column">
                    <h1 className="ui header" style={{fontSize:"2em"}}>
                    All About Yuan
                    </h1>
                    <p style={{lineHeight:"1.7rem"}}>{aboutMeContents.introduction}</p>
                </div>
                <div className="four wide right floated column">
                    img comes here
                </div>
            </div>
            <div className="row" style={{marginTop:"30px", borderTop:"1px solid lightgrey"}}>
                <div className="sixteen wide column">
                    <h1 className="ui header" style={{fontSize:"2em"}}>
                    Professional Skills
                    </h1>
                    <p style={{lineHeight:"1.7rem"}}>{aboutMeContents.skills}</p>
                </div>
            </div>
            <div className="row" style={{marginTop:"30px", borderTop:"1px solid lightgrey"}}>
                <div className="sixteen wide column">
                    <h1 className="ui header" style={{fontSize:"2em"}}>
                    Education
                    </h1>
                    <h3 style={{lineHeight:"1.7rem"}}>Master of Information Technology / University of Melbourne / 2020~2021</h3>
                    <h3 style={{lineHeight:"1.7rem"}}>Bachelor of Risk Management / National ChengChi University (Taiwan) / 2009~2013</h3>
                </div>
            </div>
            <div className="row" style={{marginTop:"30px", borderTop:"1px solid lightgrey"}}>
                <div className="sixteen wide column">
                    <h1 className="ui header" style={{fontSize:"2em"}}>
                    Work Experience
                    </h1>
                    <h3 style={{lineHeight:"1.7rem"}}>Web developer - Internship / Vmor Technology (Sydney) / 2021 Mar ~ 2021 June</h3>
                    <h3 style={{lineHeight:"1.7rem"}}>Risk specialist / Cathay Financial Holding Company (Taiwan) / 2014 Sep ~ 2019 Mar</h3>
                    <h3 style={{lineHeight:"1.7rem"}}>Internship / Fubon Financial Holding Company (Taiwan) / 2013 Jul ~ 2013 Sep</h3>
                </div>
            </div>
            <div className="row" style={{marginTop:"30px"}}>
                <div className="center aligned column">
                    <a className="ui huge button">Check Them Out</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;