import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function Question(props) {
  const [isTrue, setTrue] = useState(false);
  function handleClick() {
    setTrue((pre) => !pre);
  }
  return (
    <div className="mainQ">
      <div className="question" onClick={handleClick}>
        <p>{props.question}</p>
        {isTrue ? (
          <ClearIcon onClick={handleClick} fontSize="large" />
        ) : (
          <AddIcon onClick={handleClick} fontSize="large" />
        )}
      </div>
      <div className="answer" style={{display:isTrue?"block":"none"}}>
        <p>{props.answer}</p>
      </div>
    </div>
  );
}
