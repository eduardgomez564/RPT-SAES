import React from "react";

/*
PrimaryryButton is used for:
- Done
- Save
- Submit
*/
export default function PrimaryButton({
  children,
  className = "",
  small = false,
  ...props
}: React.PropsWithChildren<{ className?: string; small?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const sizeClasses = small ? "px-3 py-1.5 text-sm" : "px-6 py-3";
  return (
    <button className={`bg-[#013300] text-white font-bold rounded-lg hover:bg-green-900 transition ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}

