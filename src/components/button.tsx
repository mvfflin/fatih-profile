import React from "react";

export default function Button1({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <button className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-zinc-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-zinc-700 group-hover:bg-zinc-700"></span>
        <span className="relative text-zinc-700 group-hover:text-white">
          {children}
        </span>
      </button>
    </div>
  );
}
