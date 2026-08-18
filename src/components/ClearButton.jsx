import React from "react";

const ClearButton = ({completedTodos,onClick}) => {
  //let completedTodos;
  //let onClick

  if (completedTodos === 0) return null;

  return (
    <>
    <button
      onClick={onClick}
      className="mt-4 w-full py-3 backdrop-blur-2xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 rounded-lg font-mono font-semibold border border-white/10 hover:scale-[1.02] active:scale-95 text-sm"
    >
      Clear {completedTodos} Orbit Done
    </button>
    </>
  )
}

export default ClearButton;

