import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-white text-black rounded-full border border-gray-300 hover:bg-[#e6f4f1] disabled:opacity-50 disabled:cursor-not-allowed w-auto"
    >
      {label}
    </button>
  );
};

export default Button;


  
        
 