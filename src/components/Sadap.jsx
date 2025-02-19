import * as React from 'react';
import "./Sadap.css";
import Stepper, { Step } from './Stepper';
import Drag from "./Drag";
import Page1 from "./Page1";

const images = [
  { id: 1, img: "./assets/one1.svg" },
  { id: 2, img: "./assets/one2.svg" },
  { id: 3, img: "./assets/one3.svg" },
  { id: 4, img: "./assets/one4.svg" },
  { id: 5, img: "./assets/one5.svg" },
  { id: 6, img: "./assets/one6.svg" },
  { id: 7, img: "./assets/one7.svg" }
];
const images1 = [
  { id: 1, img: "./assets/two1.svg" },
  { id: 2, img: "./assets/two2.svg" },
  { id: 3, img: "./assets/two3.svg" },
  { id: 4, img: "./assets/two4.svg" },
  { id: 5, img: "./assets/two5.svg" },
  { id: 6, img: "./assets/two6.svg" }
];
const images2 = [
  { id: 1, img: "./assets/three1.svg" },
  { id: 2, img: "./assets/three2.svg" },
  { id: 3, img: "./assets/three3.svg" },
  { id: 4, img: "./assets/three4.svg" }
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
  const items=[];
  return (
    <div className="test">
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
  items={['בהגעה לאר"ן',"דיווחים","ריכוז הפצועים","סיכום טריאג'"]}
  >

    <h2>בהגעה לאר"ן</h2>
    <p>בהגעה לאר"ן יש מספר שלבים שצריך לבצע
      <br />
       סדרו על ידי גרירה את השלבים לפי הסדר</p>
  <Drag/>
  </Step>
  <Step
 items={['בהגעה לאר"ן',"דיווחים","ריכוז הפצועים","סיכום טריאג'"]}>
    <h2>דיווחים</h2>
    <p>המנהל הרפואי-המטפל הבכיר ביותר באירוע (רופא/פראמדיק/חובש שהוגדר בתור חובש בכיר באירוע)</p>
    <Page1
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={false}
    cardDimensions={{ width: 200, height: 200 }}
    cardsData={images1}
    setShow={props.setShow}/>
  </Step>
  <Step
    items={['בהגעה לאר"ן',"דיווחים","ריכוז הפצועים","סיכום טריאג'"]}>
  <h2>ריכוז הפצועים</h2>
    <p>על החובש מוטלת האחריות הראשונית לטיפול רפואי בחולים בזמן שגרה ובעת חירום. </p>
    <Page1
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={false}
    cardDimensions={{ width: 200, height: 200 }}
    cardsData={images2}
    setShow={props.setShow}/>
    
  </Step>
  <Step
  items={['בהגעה לאר"ן',"דיווחים","ריכוז הפצועים","סיכום טריאג'"]}>
    <h2>סיכום טריאג'</h2>
    <p>מגיש עזרה ראשונה (בראשי תיבות: מע"ר) הוא אדם שעבר קורס בעזרה ראשונה.</p>
    <Page1
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={false}
    cardDimensions={{ width: 200, height: 200 }}
    cardsData={images3}
    setShow={props.setShow}/>
    <button className="home-button" onClick={() => props.setShow("start1")}>חזרה למסך הבית</button>
  </Step>
</Stepper>
    </div>
  );
}

export default Sadap;
