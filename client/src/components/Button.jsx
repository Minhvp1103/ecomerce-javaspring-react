import React from "react";

const Button = ({ text, textColor, bgColor, icon,fullWidth }) => {
  return (
    <button
      type="button"
      className={`p-2 ${fullWidth && 'w-full'} ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
    >
      <p>{text}</p>
      {icon && <i>{icon}</i>}
    </button>
  );
};

export default Button;
