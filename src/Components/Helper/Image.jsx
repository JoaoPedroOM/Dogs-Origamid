import React, { useState } from "react";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false)
    target.style.opacity = 1;
  }

  return (
    <div className="grid [grid-area:1/1]">
      {skeleton && (
        <div className="[grid-area:1/1] h-full bg-[#eee] bg-gradient-to-r from-[#eee] from-0% via-white via-50% to-[#eee] to-100% [background-size:200%] animate-skeleton"></div>
      )}
      <img
        onLoad={handleLoad}
        className="block max-w-full [grid-area:1/1] opacity-0 transition duration-200"
        alt={alt}
        {...props}
        style={{ gridArea: "1/1" }}
      />
    </div>
  );
};

export default Image;
