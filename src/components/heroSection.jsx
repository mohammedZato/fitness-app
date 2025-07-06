import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="text-center px-3 mt-16">
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          BUILD YOUR <br />{" "}
          <span className="text-gray-800">BODY AND FITNESS</span>{" "}
          <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl">
            WITH PROFESSIONAL TOUCH
          </h3>{" "}
        </p>
        <button className="bg-gray-800 mt-4 hover:border-gray-800 hover:scale-110 transition-transform duration-500 md:px-10 md:py-3">
          JOIN US
        </button>
      </div>
    </>
  );
}
