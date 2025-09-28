import React from "react";

const LoaderPage = ({ text = "Loading ..." }) => (
  <div className="flex items-center justify-center min-h-screen bg-[#ebeff2]">
    <div className="relative flex flex-col items-center">
      {/* Animated GPS ping */}
      <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-0">
        <span className="flex h-16 w-16">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#24659b] opacity-30"></span>
          <span className="relative inline-flex rounded-full h-16 w-16 bg-[#24659b] opacity-10"></span>
        </span>
      </span>
      {/* GPS Pin */}
      <div
        className="relative w-20 h-20 flex items-end justify-center z-10"
        style={{
          background: "#24659b",
          borderRadius: "50% 50% 50% 50% / 55% 55% 80% 80%",
        }}
      >
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-9 h-9 bg-[#ebeff2] rounded-full"></div>
      </div>
      {/* Pin Base */}
      <div className="mt-[-8px] w-16 h-4 border-2 border-[#24659b] rounded-full opacity-25"></div>
      {/* Optional GPS text */}
      <div className="mt-6 text-[#24659b] text-lg font-medium tracking-wider opacity-70">
        {text}
      </div>
    </div>
  </div>
);

export default LoaderPage;
