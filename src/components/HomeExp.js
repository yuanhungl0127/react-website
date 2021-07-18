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
                    <div className="card-text"><p>{item.text}</p></div>
                </div>
                <div className="btn-container">
                    <div className="ui button seconday card-btn">Demo</div>
                    <div className="ui primary button card-btn">
                    GitHub 
                        <i className="right arrow icon"></i>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    )
})

const HomeExp = () => {
    return (
        <div className="card-container">
            <div className="exp-header">
                <h1>Projects</h1>
            </div>
            <a href="/" className="swiper-prev">
                <i className="fa fa-angle-left"/>
            </a>
            <a href="/" className="swiper-next">
                <i className="fa fa-angle-right"/>
            </a>
            <Swiper
                id="main"
                slidesPerView={3}
                loop={true}
                navigation={{nextEl:".swiper-next", prevEl:".swiper-prev"}}
            >
                {renderedList}
            </Swiper>
        </div>
    )
}

export default HomeExp;