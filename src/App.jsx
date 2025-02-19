import React, { useState } from "react";
import "./App.css";
import Definition from "./components/Definition";
import Roles from "./components/Roles";
import Sadap from "./components/Sadap";
import Power from "./components/Power";
import { grey } from "@mui/material/colors";

function App() {
  const [show, setShow] = useState("start");
  const [buttonColor1, setButtonColor1] = useState("#192318");
  const [buttonColor2, setButtonColor2] = useState("#192318");
  const [buttonColor3, setButtonColor3] = useState("#192318");
  const [buttonColor4, setButtonColor4] = useState("#192318");

  let setThings = (show) => {
    setShow(show);
    if (show === "definition") {
      setButtonColor1("grey");
    }
    if (show === "roles") {
      setButtonColor2("grey");
    }
    if (show === "operations") {
      setButtonColor3("grey");
    }
    if (show === "summary") {
      setButtonColor4("grey");
    }
  };

  return (
    <div className="start">
      <>
        {show === "start" && (
          <>
            <div className="start-page">
              <h1>תו"ל אר"ן</h1>
              <h2 className="txt">
                !חייל יקר
                <br />
                הלומדה עוסקת בתורת לחימה באירוע רב נפגעים
              </h2>
              <button className="btn-start" onClick={() => setShow("start1")}>
                התחלה
              </button>
            </div>
          </>
        )}
        {show === "start1" && (
          <div className="start1-page">
            <h1>תו"ל אר"ן</h1>
            <div className="btn-start1-place">
              <button
                className="btn-start"
                style={{ backgroundColor: buttonColor1 }}
                onClick={() => setThings("definition")}
              >
                הגדרה
              </button>
              <button
                className="btn-start"
                style={{ backgroundColor: buttonColor2 }}
                onClick={() => setThings("roles")}
              >
                תפקידים
              </button>
              <button
                className="btn-start"
                style={{ backgroundColor: buttonColor3 }}
                onClick={() => setThings("operations")}
              >
                סד"פ
              </button>
              <button
                className="btn-start"
                style={{ backgroundColor: buttonColor4 }}
                onClick={() => setThings("summary")}
              >
                סיכום
              </button>
            </div>
          </div>
        )}
        {show === "definition" && <Definition setShow={setShow} />}
        {show === "roles" ? <Roles setShow={setShow} /> : <></>}
        {show === "summary" ? <Power setShow={setShow} /> : <></>}
        {show === "operations" ? <Sadap setShow={setShow} /> : <></>}
      </>
    </div>
  );
}

export default App;
