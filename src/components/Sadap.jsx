// import * as React from 'react';
import React, { useState } from "react";
import "./Sadap.css";
import Stepper, { Step } from "./Stepper";
import Drag from "./Drag";
import Page1 from "./Page1";

const images = [
  { id: 1, img: "./assets/one1.svg" },
  { id: 2, img: "./assets/one2.svg" },
  { id: 3, img: "./assets/one3.svg" },
  { id: 4, img: "./assets/one4.svg" },
  { id: 5, img: "./assets/one5.svg" },
  { id: 6, img: "./assets/one6.svg" },
  { id: 7, img: "./assets/one7.svg" },
];
const images1 = [
  { id: 1, img: "./assets/two1.svg" },
  { id: 2, img: "./assets/two2.svg" },
  { id: 3, img: "./assets/two3.svg" },
  { id: 4, img: "./assets/two4.svg" },
  { id: 5, img: "./assets/two5.svg" },
  { id: 6, img: "./assets/two6.svg" },
];
const images2 = [
  { id: 1, img: "./assets/three1.svg" },
  { id: 2, img: "./assets/three2.svg" },
  { id: 3, img: "./assets/three3.svg" },
  { id: 4, img: "./assets/three4.svg" },
];
const images3 = [
  { id: 1, img: "./assets/four1.svg" },
  { id: 2, img: "./assets/four2.svg" },
  { id: 3, img: "./assets/four3.svg" },
  { id: 4, img: "./assets/four4.svg" },
  { id: 5, img: "./assets/four5.svg" },
  { id: 6, img: "./assets/four6.svg" },
  { id: 7, img: "./assets/four7.svg" },
];

function Sadap(props) {
  const items = [];
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(true);

  const [opacityNum1, setOpacity1] = useState("#ffffff");
  const [opacityNum2, setOpacity2] = useState("#808080");
  const [showStart, setShowStart] = useState(true);
  // let opacityNum1="#192318";
  // let opacityNum2="#808080";
  const setImg = (numImg) => {
    if (numImg === 2) {
      setOpacity1("#ffffff");
      setOpacity2("#808080");
      setShowImg2(true);
      setShowImg1(false);
    } else if (numImg === 1) {
      setOpacity2("#ffffff");
      setOpacity1("#808080");
      setShowImg1(true);
      setShowImg2(false);
    }
  };

  return (
    <>
      <div className="test">
        {showStart && (
          <div className="strt-page">
            <br />
            <h2 id="header2">
              שימו &#x2665;
              <br />
              להלן סדר הפעולות
            </h2>
            <img id="strt-img" src="./assets/strt.png" />
            <button id="con-btn" onClick={() => setShowStart(false)}>
              המשך
            </button>
          </div>
        )}
        <Stepper
          setShow={props.setShow}
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="הקודם"
          nextButtonText="הבא"
        >
          <Step
            items={['בהגעה לאר"ן', "דיווחים", "ריכוז הפצועים", "סיכום טריאז'"]}
          >
            <h2>בהגעה לאר"ן</h2>
            <p>
              בהגעה לאר"ן יש מספר שלבים שצריך לבצע
              <br />
              סדרו על ידי גרירה את השלבים לפי הסדר
            </p>
            <Drag />
          </Step>
          <Step
            items={['בהגעה לאר"ן', "דיווחים", "ריכוז הפצועים", "סיכום טריאז'"]}
          >
            <h2>דיווחים</h2>
            <p>
              ישנם 2 סוגי דיווחים:
              <br />
              לחצו על דיווח כדי לקרוא עליו
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignContent: "center",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <button
                style={{ backgroundColor: opacityNum1 }}
                className="divuach"
                onClick={() => setImg(1)}
              >
                דיווח ראשוני
              </button>
              <button
                style={{ backgroundColor: opacityNum2 }}
                className="divuach"
                onClick={() => setImg(2)}
              >
                דיווח מלא לאחר סיכום טריאז'
              </button>
            </div>
            {showImg1 && <img className="images12" src="./assets/img1.png" />}
            {showImg2 && <img className="images12" src="./assets/img02.png" />}
          </Step>
          <Step
            items={['בהגעה לאר"ן', "דיווחים", "ריכוז הפצועים", "סיכום טריאז'"]}
          >
            <h2>ריכוז הפצועים</h2>
            <p>
              על החובש מוטלת האחריות הראשונית לטיפול רפואי בחולים בזמן שגרה ובעת
              חירום.{" "}
            </p>
            <div id="eye">
              <h2
                className="close-btn"
                onClick={() =>
                  (document.getElementById("eye").style.display = "none")
                }
              >
                X
              </h2>
              <p className="piska">
                אם יש ירוק בעיניים וודאי, לעלות בקשר שנמצאו כל הפצועים, אם לא,
                לעלות שלא ידוע אם יש עוד פצועים
              </p>
            </div>
            <div id="medic">
              <h2
                className="close-btn"
                onClick={() =>
                  (document.getElementById("medic").style.display = "none")
                }
              >
                X
              </h2>
              <p className="piska">
                להתחיל מעבר על הפצועים מט"ב/חובש שמוגדר חובש בכיר יחד עם
                המח"ר-טריאז'
              </p>
            </div>
            <div id="table">
              <h2
                className="close-btn"
                onClick={() =>
                  (document.getElementById("table").style.display = "none")
                }
              >
                X
              </h2>
              <p className="piska">
                בטריאז' עושים מעבר זריז על כל פצוע (A,B חצי C), והמח"ר כותב
                בטבלה את כל הדברים הרלוונטיים
              </p>
            </div>
            <div id="hat">
              <h2
                className="close-btn"
                onClick={() =>
                  (document.getElementById("hat").style.display = "none")
                }
              >
                X
              </h2>
              <p className="piska">
                בזמן הטריאז' ,החובשים והלוחמים מריצים סכמה מהירה על הפצועים שעוד
                לא הגיעו אליהם ומכינים אותם לפינוי (לא מפריעים למט"ב)
              </p>
            </div>
            <div className="ico">
              <div
                className="icons"
                onClick={() =>
                  (document.getElementById("eye").style.display = "block")
                }
              >
                <img className="icon1" src="./assets/icon-eye.png" />
              </div>
              <div
                className="icons"
                onClick={() =>
                  (document.getElementById("hat").style.display = "block")
                }
              >
                <img className="icon1" src="./assets/hat-icon.png" />
              </div>
              <div
                className="icons"
                onClick={() =>
                  (document.getElementById("table").style.display = "block")
                }
              >
                <img className="icon2" src="./assets/table-icon.png" />
              </div>
              <div
                className="icons"
                onClick={() =>
                  (document.getElementById("medic").style.display = "block")
                }
              >
                <img className="icon2" src="./assets/medic-icon.png" />
              </div>
            </div>
          </Step>
          <Step
            items={['בהגעה לאר"ן', "דיווחים", "ריכוז הפצועים", "סיכום טריאז'"]}
          >
            <h2>סיכום טריאז' והמשך טיפול</h2>
            <p>
              לאחר סיום הטריאז’ תתכנס החוליה הרפואית, תסכם את המידע שנאסף עד כה
              לגבי הפצועים ותגזור משמעויות ומשאבים לטיפול
              <br />
              להעביר בקשר את סיכום המידע שנאסף:
            </p>
            <img style={{ width: "85%" }} src="./assets/walkie.png" />
            <button
              className="home-button"
              onClick={() => props.setShow("start1")}
            >
              חזרה למסך הבית
            </button>
          </Step>
        </Stepper>
      </div>
    </>
  );
}

export default Sadap;
