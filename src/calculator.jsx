// import React from 'react'
// import Button from './Button'
// import './App.css'
// import Display from './Display'

// function calculator() {
//   return (
//      <div className="container">
//        <div className="">
//         <h1>hello</h1>
//            <Display/>
//             <ButtonGrid/>
//         </div>
//     </div>
//   )
// }

// export default calculator




import React, { useState, useEffect } from "react";
import Display from "./Display";
import Button from "./Button";
import './App.css'

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Inside Calculator.jsx
useEffect(() => {
  const handleKeyDown = (e) => {
    const key = e.key;

    if (/[\d+\-*/.]/.test(key)) {
      handleClick(key);
    } else if (key === "Enter") {
      e.preventDefault();
      handleEqual();
    } else if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (key === "Escape" || key.toLowerCase() === "c") {
      handleClear();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);


  return (
    <div className="nav ">
        <div className={`calculator-container ${input ? "active-bg" : ""}`}>

      
        <Display input={input} />
        <Button
          onClick={handleClick}
          onEqual={handleEqual}
          onClear={handleClear}
        />
      </div>
    </div>
  );
};

export default Calculator;








// export default function Calculator(){
//     const [input ,setInput] = useState("");


// const handleClick = (value) =>{
//     setInput((prev)=> prev + value);
// };
// const handleClear = () =>{
//     setInput("");
// };
// const handleEqual = () =>{
//     try{
//         setInput(eval(input).toString());
//     }catch (error){
//         setInput("Error");
//     }
    
// };


// return (
//     <div className="flex flex-col item-center justify min-h-screen bg-gray-100">
//         <div className="bg-white p-4 rounded-2xl shadow-xl w-72">

//             <ButtonGrid/>
//         </div>
//     </div>
// )

// }