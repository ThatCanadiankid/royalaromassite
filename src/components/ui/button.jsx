import React from "react";

export function Button({ children, className, variant = "default", ...props }) {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 hover:bg-gray-100",
  };
  
  const styles = `${baseStyle} ${variants[variant] || variants.default} ${className || ""}`;
  
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
