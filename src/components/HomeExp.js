import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper";
import "swiper/swiper-bundle.css";
import "./HomeExp.css";
import {HomeExpItems} from "./HomeExpItems";

SwiperCore.use([Navigation]);

const renderedList = HomeExpItems.map((item) => {
    return (
        <SwiperSlide key={item.title}>
            <div className="card">
                <div className="card-img">
                    <img alt={item.title} src={item.src}/>
                </div>
                <div className="card-content">
                    <div className="card-header"><h3>{item.title}</h3></div>
                    <div className="card-text">
                        <p style={{fontSize: "16px", fontWeight: "600"}}>Technologies stack :</p>
                        {item.text.map((skill)=>{
                            return <p key={skill}># {skill}</p>
                        })}
                    </div>
                </div>
                <div className="btn-container">
                    {(item.demo.url)? <a href={item.demo.url} className="ui button seconday card-btn"><span id="demo-btn">Demo</span></a>: null}
                    
                    {(item.title === "Rumour Detection (NLP)")? null : <a href={item.github} className="ui primary button card-btn"><span id="git-btn" >GitHub</span><i className="right arrow icon"></i>
                    </a>}
                    
                </div>
            </div>
        </SwiperSlide>
    )
})

const HomeExp = () => {
    return (
        <div id="exp" className="card-container" style={{borderTop:"1px solid lightgrey"}}>
            <div className="exp-header">
                <p>CHECK OUT SOME OF MY WORKS.</p>
            </div>
            <a href="/" className="swiper-prev">
                <i className="fa fa-angle-left"/>
            </a>
            <a href="/" className="swiper-next">
                <i className="fa fa-angle-right"/>
            </a>
            <Swiper
                id="main"
                slidesPerView={(window.innerWidth >= 900) ? 3 : 1}
                loop={true}
                navigation={{nextEl:".swiper-next", prevEl:".swiper-prev"}}
            >
                {renderedList}
            </Swiper>
        </div>
    )
}

export default HomeExp;