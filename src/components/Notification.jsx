import React from "react";
import { CheckCircle, AlertCircle, X } from "Lucide-react";

const Notification = ({notification, onClose}) => {
  //let notification
  //let onClose
  
  if (!notification) return null;
  return (
    <div>
      <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-5">
        <div
        className={`flex items-center gap-3 px-3 py-3 rounded-2xl shadow-2xl backdrop-blur-2xl border ${
          notification.type === "success"
            ? "bg-emerald-950/50 border-emerald-800/40 text-white"
            : notification.type === "error"
            ? "bg-red-950/50 border-red-800/40 text-white"
            : "bg-emerald-400/20 border-white/40 text-white"
        }`}
      >
        {notification.type === "success" && <CheckCircle size={18} />}
        {notification.type === "error" && <AlertCircle size={18} />}
        <span className="font-semibold text-sm">{notification.message}</span>
        <button
          onClick={onClose}
          className="hover:opacity-80 transition-opacity"
        >
          <X size={20} />
        </button>
      </div>
      </div>
    </div>
  );
};
export default Notification;

/*const Notification = ({ notification, onClose }) => {
  if (!notification) {
    return null;
  }
  return (
      </div>
    </div>
  );
};*/

