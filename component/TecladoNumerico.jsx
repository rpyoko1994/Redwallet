import React from "react";

const handleNumberClick = (number) => {
    if (number === "delete") {
      setFromAmount((prev) => prev.slice(0, -1));
    } else {
      setFromAmount((prev) => prev + number);
    }
  };

function TecladoNumerico() {
    return (
        <div className="grid grid-cols-3 gap-2 my-4">
{[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "delete"].map((item) => (
  <button
    key={item}
    onClick={() => handleNumberClick(item)}
    className={`p-3 rounded-lg shadow text-center font-bold text-2xl ${
      item === "delete" ? "text-white" : ""
    }`}
  >
    {item === "delete" ? "⌫" : item}
  </button>
))}
</div>
    );
  }
  
  export default TecladoNumerico;      


