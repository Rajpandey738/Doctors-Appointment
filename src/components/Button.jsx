import React from "react";

const Button = ({ children, variant = "primary", onClick }) => {
  const baseStyle =
    "px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base cursor-pointer";

  const styles = {
    primary: `${baseStyle} bg-[#1C352D] text-white hover:bg-[#154c3c]`,
    secondary: `${baseStyle} border border-[#1C352D] text-[#1C352D] hover:bg-[#1C352D] hover:text-white`,
  };

  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
