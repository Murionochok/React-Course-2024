import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [stepNum, setStepNum] = useState(2);
  const [open, setOpen] = useState(true);

  const handlePrev = () => {
    if (stepNum > 1) setStepNum(stepNum - 1);
  };
  const handleNext = () => {
    if (stepNum < 3) setStepNum(stepNum + 1);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="close" onClick={handleToggle}>
        &times;
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={stepNum >= 1 ? "active" : ""}>1</div>
            <div className={stepNum >= 2 ? "active" : ""}>2</div>
            <div className={stepNum >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {stepNum}: {messages[stepNum - 1]}
          </p>
          <div className="buttons">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
