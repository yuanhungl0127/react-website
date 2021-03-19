import React from "react";
import "./HeaderContainer.css"

const HeaderContainer = () => {
    return (
        <div className="ui text container myContainer">
            <h1 className="ui inverted header">
                A Software Engineer
            </h1>
            <h2 className="ui inverted header">Stay Hungry. Stay Foolish.</h2>
            <div className="ui huge primary button">
                GitHub 
                <i className="right arrow icon"></i>
            </div>
        </div>
    )
}

export default HeaderContainer;