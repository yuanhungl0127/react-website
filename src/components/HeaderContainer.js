import React from "react";
import "./HeaderContainer.css"

const HeaderContainer = () => {
    return (
        <div className="ui text container myContainer">
            <h2 className="ui inverted header">
                YuanHung Lin
            </h2>
            <h3 className="ui inverted header">A software engineer</h3>
            <div className="ui huge primary button" id="header-github">
                GitHub 
                <i className="right arrow icon"></i>
            </div>
        </div>
    )
}

export default HeaderContainer;