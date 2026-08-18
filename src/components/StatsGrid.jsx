import React from "react";
import { Zap, CircleCheck, Circle } from "Lucide-react";

const StatsGrid = ({totalTodos,activeTodos,completedTodos}) => {
  //let totalTodos = 4;
  //let activeTodos = 2;
  //let completedTodos = 2;
  return (
    <>
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded p-7 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex items-center gap-2 mb-1">
          <Zap size={22} className="text-emerald-600" />
          <span className="text-white text-xl font-mono font-semibold">Total</span>
          </div>
        <div className="text-2xl font-black text-white">{totalTodos}</div>
      </div>

      <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded p-7 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex items-center gap-2 mb-1">
          <Circle size={22} className="text-emerald-600" />
          <span className="text-white text-xl font-mono font-semibold">Active</span>
          </div>
        <div className="text-2xl font-black text-white">{activeTodos}</div>
      </div>

      <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded p-7 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex items-center gap-2 mb-1">
          <CircleCheck size={22} className="text-emerald-600" />
          <span className="text-white text-xl font-mono font-semibold">Done</span>
          </div>
        <div className="text-2xl font-black text-white">{completedTodos}</div>
      </div>
    </div>
    </>
  )
}

export default StatsGrid;

