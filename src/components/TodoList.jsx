import React from "react";
import TodoItem from "./TodoItem";
import { Sparkles } from "lucide-react";

const TodoList = ({todos,onDelete,onStartEdit,onSaveEdit,onCancelEdit,editingId,editText,onEditTextChange,onEditKeyPress,onToggle}) => {
  //let todos = [];
  //let editingId;
  //let editText;
  //let onToggle;
  //let onStartEdit;
  //let onSaveEdit;
  //let onCancelEdit;
  //let onDelete;
  //let onEditTextChange;
  //let onEditKeyPress;

  if (todos.length === 0){
    return (
      <div className="text-center py-16 backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10">
        <div className="w-16 h-16 backdrop-blur-xl bg-white/10 shadow-lg flex items-center justify-center mx-auto mb-3 rounded-full">
          <Sparkles size={32} className="text-white/30" />
        </div>

        <p className="text-white text-lg font-mono font-semibold mb-1">
          No Orbits Yet!
        </p>

        <p className="text-white/50 text-sm font-mono">
          Launch your first task into Orbit.
        </p>
      </div>
    )
  }

  return <>
    <div className="space-y-2">
    {todos.map((todo,index) =>(
        <TodoItem key={index}
          todo={todo}
          index={index}
          editingId={editingId}
          editText={editText}
          onToggle={onToggle}
          onStartEdit={onStartEdit}
          onSaveEdit={onSaveEdit}
          onCancelEdit={onCancelEdit}
          onDelete={onDelete}
          onEditTextChange={onEditTextChange}
          onEditKeyPress={onEditKeyPress}
        />
    ))}
    </div>
  </>
};
export default TodoList;