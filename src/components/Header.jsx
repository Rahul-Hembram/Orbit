import React from "react";
import { Sparkles,TrendingUp} from 'lucide-react';
import { TypeAnimation } from "react-type-animation";

const Header = ({progress,activeTodos,totalTodos}) => {
  //let progress = 50;
  //let activeTodos =4;
  return (
    <>
      <div className="backdrop-blur-2xl bg-white/5 rounded border border-white/5 p-6 mb-4 shadow-2xl">

  {/* Top Row */}
  <div className="flex justify-between items-start">

    {/* Left */}
    <div className="flex items-start gap-3 flex-1">
      <div className="relative">
        <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-br from-black via-emerald-950 to-green-900 rounded shadow-lg">
          <Sparkles className="text-white" size={50} />
        </div>

        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping"></div>
      </div>

      <div className="flex-1">
       <h1 className="text-3xl font-extrabold tracking-[0.2em] uppercase text-white">
  ORBIT
</h1>

        <div className="h-8 w-72">
          <TypeAnimation
            sequence={[
              "Every task in Orbit!",
              1500,
              "Stay productive.",
              1500,
              "Achieve more.",
              1500,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-lg font-mono text-white/80"
          />
        </div>
      </div>
    </div>

    {/* Right */}
    <div className="ml-6 flex items-center px-4 py-2 gap-2 bg-white/10 rounded-full border border-white/10">
      <TrendingUp size={20} className="text-emerald-300" />
      <span className="text-white font-semibold">
        {activeTodos} Active
      </span>
    </div>

  </div>

  {/* Progress Bar */}
  {totalTodos > 0 && (
    <div className="mt-6 w-full">

      <div className="flex justify-between mb-2">
        <span className="text-white/70 text-sm">
          Progress
        </span>

        <span className="text-white font-bold">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-green-600 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  )}

</div>
  </>
  )
}
export default Header