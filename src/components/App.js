import React,{useState} from "react";
import HeaderContainer from "./HeaderContainer";
import Navbar from "./Navbar";
import "./App.css";
import AboutMe from "./AboutMe";
import ScrollNavbar from "./ScrollNavbar";
import HomeExp from "./HomeExp";


const App = () =>{ 
  const [scrollY, setScrollY] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <div>
      <div className="header-container">
      <Navbar/>
      <ScrollNavbar scrollY={scrollY}/>
      <HeaderContainer/>
      </div>
      <div>
        <AboutMe/>
      </div>
      <div>
        <HomeExp/>
      </div>
    </div>
  )
}

export default App;
