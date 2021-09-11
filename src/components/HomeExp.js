import React from "react";
import "swiper/swiper-bundle.css";
import "./HomeExp.css";
import {HomeExpItems} from "./HomeExpItems";

const renderList = HomeExpItems.map((item,index)=>{
    return (
        <div className={`exp-item-${index}-container`} onClick={()=>{window.location=item.url}} key={index}>
            <img className="exp-item-image" src={item.src} alt={item.title}/>
            <div className="exp-item-overlay">
                <div className="exp-item-title">
                    {item.title}
                </div>
                <p className="exp-item-content">
                    Tech stack: {item.text}
                </p>
            </div>
        </div>
    )
})

const HomeExp = () => {
    return (
        <div id="exp" className="card-container" style={{borderTop:"1px solid lightgrey"}}>
            <div className="exp-header">
                <p>CHECK OUT SOME OF MY WORKS.</p>
            </div>
            
            <div className="exp-gallery">
                {renderList}
            </div>
            
        </div>
    )
}

export default HomeExp;