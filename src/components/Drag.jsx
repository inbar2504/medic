import React, { useState } from "react";
import { Box } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./Drag.css";

const sortedItems = [
    { id: "0", text: "חבירה וניסיון לגבש תמונת מצב" },
  { id: "1", text: "תדרוך הכוח" },
  { id: "2", text: "הגדרת נקודת ריכוז הפצועים" },
  { id: "3", text: "לחלק לפי גזרות" },
  { id: "4", text: "תדרוך על הגעה לנקודת ריכוז הפצועים" },
  { id: "5", text: 'להעלות דיווח שהגעתם לאר"ן ומתחילים לגבש תמונת מצב' },
  
];
const itemss = [
    { id: "1", text: "תדרוך הכוח" },
    { id: "2", text: "הגדרת נקודת ריכוז הפצועים" },
    { id: "3", text: "לחלק לפי גזרות" },
    { id: "4", text: "תדרוך על הגעה לנקודת ריכוז הפצועים" },
    { id: "5", text: 'להעלות דיווח שהגעתם לאר"ן ומתחילים לגבש תמונת מצב' },
    { id: "0", text: "חבירה וניסיון לגבש תמונת מצב" },
  ];
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  return arr1.every(
    (obj, index) => JSON.stringify(obj) === JSON.stringify(arr2[index])
  );
}

const Drag = () => {
  const [items, setItems] = useState(itemss);
  const [isItemsSorted, setIsItemsSorted] = useState();
  const [isChecked, setIsChecked] = useState();
  
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setItems(newItems);
  };

  const checkOrder = () => {
    setIsChecked(true);
    if (compareArrays(items, sortedItems)) {
      setIsItemsSorted(true);
    } else {
      setIsItemsSorted(false);
    }
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={0.5}
              pt={1}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{
                        opacity: snapshot.isDragging ? 0.7 : 1,
                      }}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                      width={"100%"}
                      className="item items"
                    >
                      {item.text}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>

      <button onClick={checkOrder} className="check">בדיקה</button>
      <br />
      {(isItemsSorted && isChecked) ? 
      <div className="answers">
        <button className="close-button" onClick={ () => setIsChecked(false)}>X</button>
        תשובה נכונה!
        </div>
    //   "תשובה נכונה!"
      : 
      <></>}
       {(!isItemsSorted && isChecked) ? 
        <div className="answers">
        <button className="close-button" onClick={ () => setIsChecked(false)}>X</button>
        תשובה שגויה!
       <br />
        הסדר הנכון הינו:
        <br />
   1. חבירה וניסיון לגבש תמונת מצב
   <br />
   2. תדרוך הכוח
   <br />
  3. הגדרת נקודת ריכוז הפצועים
  <br />
4. לחלק לפי גזרות
<br />
5. תדרוך על הגעה לנקודת ריכוז הפצועים
<br />
6. להעלות דיווח שהגעתם לאר"ן ומתחילים לגבש תמונת מצב
        </div>
    //    "תשובה שגויה!"
       :
        <></>}
    </div>
  );
};

export default Drag;
