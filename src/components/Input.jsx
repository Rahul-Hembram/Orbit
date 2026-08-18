import React from "react";
import { Plus } from "Lucide-react";

const Input = ({value,onChange,onAdd,onKeyPress}) => {
  //let value;
  //let onChange;
  //let onAdd;
  //let onKeyPress
  return (
      <div className="backdrop-blur-2xl bg-white/5 rounded-xl border border-white/10 p-3 mb-4 shadow-2xl hover:bg-white/10 transition-all duration-300">
        <div className="flex gap-2">
          <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyPress}
          placeholder="What's your Orbit today?"
          className="flex-1 px-4 py-3 bg-white/10 text-white placeholder-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 font-medium text-sm border border-white/5 backdrop-blur-xl transition-all"
          />
          <button
          onClick={onAdd}
          className="px-6 py-3 bg-emerald-950 text-white font-mono rounded-2xl hover:shadow-lg flex items-center justify-center gap-2 duration-300 font-bold text-sm hover:scale-105 active:scale-95">
          <Plus size={20} />Add
          </button>
        </div>
      </div>
  )
}

export default Input;
