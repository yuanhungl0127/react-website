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
            <div className="row" style={{marginTop:"30px"}}>
                <div className="center aligned column">
                    <a className="ui huge button">Check Them Out</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;