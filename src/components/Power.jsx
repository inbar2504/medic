import React, { useState, Component, useRef, useEffect } from "react";
import "./Power.css";
import Slider from "infinite-react-carousel";
import axios from "axios";

// const IMAGE_URL =
//   "medic/public/assets/download-image.png";

function Power(props) {
  const handleDownload = () => {
    // נתיב מקומי לתמונה
    const imagePath = "./assets/download-image.png"; // שנה לנתיב הקובץ שלך

    // יצירת אובייקט קישור להורדה
    const a = document.createElement("a");
    a.href = imagePath;
    a.download = "download-image.png"; // שם הקובץ שיתקבל
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  // const toDataURL = async (url) => {
  //   /* Using Fetch */
  //   // const response = await fetch(url)
  //   // const blobData = await response.blob()
  //   // const imageDataUrl = URL.createObjectURL(blobData);

  //   /* Using Axios */
  //   const response = await axios.get(url, { responseType: "blob" });
  //   const imageDataUrl = URL.createObjectURL(response.data);

  //   return imageDataUrl;
  // };

  // const handleDownload = async () => {
  //   const a = document.createElement("a");
  //   a.href = await toDataURL(IMAGE_URL);
  //   a.download = "download-image.png";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // };
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
     <br />
      <button className="home-button" onClick={() => props.setShow("start1")}>
        חזרה למסך הבית
      </button>
      <button className="download-button" onClick={handleDownload}>לחץ להורדת תמונה עם הסיכום</button>
    </div>
  );
}

export default Power;
