import React, {useState} from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const onClickMenu = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <div className="NavbarItems">
            <div className="menu-icon" onClick={onClickMenu}>
                {(menuClicked) ? <i className="fa fa-times fa-lg"/> : <i className="fa fa-bars fa-lg"/>}
            </div>
            <ul className={(menuClicked)?"nav-menu active":"nav-menu"}>
                <li><a className="nav-link">Home</a></li>
                <li><a className="nav-link">About Me</a></li>
                <li><a className="nav-link">Experience</a></li>
                <li><a className="nav-link">Education</a></li>
            </ul>
            <div className="ui button inverted nav-btn">
                RESUME
                <i style={{paddingLeft:"10px"}} className="fa fa-download"/>
            </div>
        </div>
    )
}

export default Navbar;