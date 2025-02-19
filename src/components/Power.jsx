import React, { useState, Component, useRef, useEffect } from "react";
import "./Power.css";
import Slider from "infinite-react-carousel";

function Power(props) {
  return (
    <div>
      <br />
      <h1 className="sicum">סיכום</h1>
      {/* autoplay={true} */}
      <Slider className="slider" autoplay={true} centerMode={true} overScan={1}>
        <div className="hilo">
          <span className="hilo1">
            סיום לחימה וטיפול ראשוני מציל חיים תחת אש/חבירה לאר"ן
          </span>
        </div>
        <div className="hilo">
          <span className="hilo1">
           ניתוק מגע
          </span>

        </div>
        <div className="hilo">
          <span className="hilo1">
           ריכוז פצועים - יצירת זירה
          </span>
        </div>
        <div className="hilo">
          <span className="hilo1">
            טריאז'
          </span>

        </div>
        <div className="hilo">
          <span className="hilo1">
           סיכום טריאז'
          </span>
        </div>
        <div className="hilo">
          <span className="hilo1">
           טיפול- ע"פ עקרונות עבודה עם מטפל בכיר
          </span>
        </div>
        <div className="hilo">
          <span className="hilo1">
           חבירה לכוח רפואי
          </span>
        </div>
        <div className="hilo">
          <span className="hilo1">
           קיפול - בניהול המח"ר
          </span>
        </div>
      </Slider>
      <button className="home-button" onClick={() => props.setShow("start1")}>
        חזרה למסך הבית
      </button>
    </div>
  );
}

export default Power;
