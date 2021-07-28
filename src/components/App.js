import React,{useState} from "react";
import HeaderContainer from "./HeaderContainer";
import Navbar from "./Navbar";
import "./App.css";
import AboutMe from "./AboutMe";
import ScrollNavbar from "./ScrollNavbar";
import HomeExp from "./HomeExp";
import Footer from "./Footer";


const App = () =>{ 
  const [scrollY, setScrollY] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <div>
      <div id="home" className="header-container">
        <Navbar/>
        {(window.innerWidth >= 768)? <ScrollNavbar scrollY={scrollY}/>: null}
        <HeaderContainer/>
      </div>
      <div>
        <AboutMe/>
      </div>
      <div>
        <HomeExp/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
