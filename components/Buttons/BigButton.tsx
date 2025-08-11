import React from "react";

export default function BigButton({
  children,
  className = "",
  ...props
}: React.PropsWithChildren<{ className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={`w-full bg-gradient-to-r from-green-600 to-[#133000] text-white font-bold py-3 rounded-lg hover:opacity-90 transition shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
