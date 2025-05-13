import React, { useState, Component, useRef, useEffect } from "react";
import "./Definition.css";
import { Block } from "@mui/icons-material";

function Definition(props) {
  const [pageNum, setPageNum] = useState(0);
  const [finish1, setFinish1] = useState("false");

  return (
    <div className="definition">
      <br />
      <h1>הגדרה</h1>
      <h3>
        אירוע בו הטיפול המיטבי
        <br /> בפצוע אחד בא על
        <br /> חשבון טיפול מיטבי
        <br /> בפצוע אחר
      </h3>
      <h3 className="underline">אר"ן מורכב משני גורמים</h3>
      <div id="eyum">
        <h2
          className="close-btn"
          onClick={() =>
            document.getElementById("eyum").style.display = "none"
          }
        >
          X
        </h2>
        <p className="piska">תחת אש
          <br />
          הטיפול הראשוני יינתן ע"י האדם הכי קרוב (מע"ר/חובש)
          ניהול וסיום הלחימה קודם לטיפול הרפואי
          בטיפול תחת אש - נעודד את הפצוע לטיפול עצמי
          <br />
          בטיפול ראשוני בלבד- נניח CAT ונקודות לחיצה
        </p>
      </div>
      <div id="pzuim">
        <h2
          className="close-btn"
          onClick={() =>
            document.getElementById("pzuim").style.display = "none"
          }
        >
          X
        </h2>
        <p className="piska">
          -מוות שאינו בר מניעה-
          <br />
          לא משנה מה נעשה בשטח, לא נוכל למנוע
          <br /><br />
          -מוות בר מניעה-
          <br />
          תמותה שבאמצעות טיפול נכון ניתן למנוע
        <br />
          90%
       מפציעות אלו-מדממים עצירת דימומים תציל אותם
       <br />
        10%
      פגיעות נתיב אויר, פגיעות חזה</p>
      </div>
      <div className="btns5">
        <button
          className="btn2"
          onClick={() =>
            (document.getElementById("eyum").style.display = "block")
          }
        >
          איום
        </button>
        <button className="btn2" onClick={() =>
            (document.getElementById("pzuim").style.display = "block")
          }>פצועים</button>
      </div>

      <button className="continue-btn" onClick={() => props.setShow("start1")}>
        המשך
      </button>
    </div>
  );
}

export default Definition;
