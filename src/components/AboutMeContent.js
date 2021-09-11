import {FaDocker, FaReact, FaJava, FaPython, FaHtml5, FaCss3Alt, FaNodeJs} from "react-icons/fa";
import {SiRedux, SiMysql, SiGithubactions} from "react-icons/si";
import {DiJavascript1, DiMongodb, DiGoogleCloudPlatform} from "react-icons/di"

export const aboutMeContents = {
    introduction: "I am YuanHung, but people usually call me \" Yuan \" . I am currently a second year Master of IT student at University of Melbourne who hope to become an innovated and responsible software engineer.",
    skills: [{text: "React.js", icon: <FaReact size={35}/>}, {text: "React-hooks", icon: <FaReact size={35}/>}, {text: "Redux", icon: <SiRedux size={35}/>}, {text: "JavaScript", icon:<DiJavascript1 size={35}/>}, {text: "Docker", icon: <FaDocker size={35}/>}, {text: "GCP", icon: <DiGoogleCloudPlatform size={35}/>}, {text: "Python3", icon: <FaPython size={35}/>}, {text: "CI/CD", icon: <SiGithubactions size={35}/>}, {text: "Node.js", icon: <FaNodeJs size={35}/>}, {text: "MySQL", icon: <SiMysql size={35}/>}, {text: "MongoDB", icon: <DiMongodb size={35}/>}, {text: "HTML5", icon:<FaHtml5 size={35}/>}, {text: "Java", icon: <FaJava size={35}/>}, {text: "CSS3", icon: <FaCss3Alt size={35}/>}]
}