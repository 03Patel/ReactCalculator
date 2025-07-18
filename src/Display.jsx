import React from "react";
import './App.css'

const Display = ({ input }) => {
  return (
    <div className="mb-4 text-xl font-mono border border-gray-300 rounded p-2 h-12 text-right overflow-x-auto">

      <p className="inputs">{input}</p>
    </div>
  );
};

export default Display;