import React from "react";
import { Check, Save, X, Edit, Trash } from "lucide-react";

const TodoItem = ({
  todo,
  index,
  editingId,
  editText,
  onToggle,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onDelete,
  onEditTextChange,
  onEditKeyPress
  }) => {
    const isEditing = editingId == todo.id;
    return (
      <>
      <div className={`group backdrop-blur-2xl bg-white/5 hover:bg-white/10 rounded-xl p-3 flex items-center gap-3 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-950/50 ${todo.completed ? "opacity-50" : ""}`}
      style={{animation:`slideIn 0.4s ease-out ${index * 0.05}s backwards`,}}>

      <button onClick={() => onToggle(todo.id)}
        className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${todo.completed?"bg-emerald-950/50 shadow-lg shadow-white/10":"border border-white/30 hover:border-emerald-500/40 hover:bg-emerald-950/50"
        }`}>
        {todo.completed && <Check size={14} className="text-white font-bold"/>}
      </button>

      {isEditing ? (
        <>
        <input
          type="text"
          value={editText}
          onChange={onEditTextChange}
          onKeyDown={(e) => onEditKeyPress(e,todo.id)}
          className="flex-1 px-3 py-1.5 bg-white/10 text-white placeholder-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-sm border border-white/10"
          autoFocus
        />
        </>
      ) : (
        <>
        <span className={`flex-1 font-medium text-sm transition-all duration-300 ${todo.completed ? "line-through text-white/40" : "text-white"
        }`}>{todo.text}</span>
        </> 
      )}

      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {isEditing ? (
          <>
            <button
              onClick={() => onSaveEdit(todo.id)}
              className="w-8 h-8 rounded-lg bg-emerald-950/50 text-white/60 hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 border border-white/10"
            >
              <Save size={16} />
            </button>

            <button
              onClick={onCancelEdit}
              className="w-8 h-8 rounded-lg bg-red-900/50 text-white/60 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 border border-white/10"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onStartEdit(todo.id, todo.text)}
              className="w-8 h-8 rounded-lg bg-blue-900/50 text-white/60 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 border border-white/10"
            >
              <Edit size={16} />
            </button>

            <button
              onClick={() => onDelete(todo.id)}
              className="w-8 h-8 rounded-lg bg-red-900/50 text-white/60 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 border border-white/10"
            >
              <Trash size={16} />
            </button>
          </>
        )}
      </div>
      </div>
      </>
  )
}

export default TodoItem;


