import React from "react";

const Head = ({ head, par }) => {
  return (
    <div
      class="flex flex-wrap maginn"
      
    >
      <div
        className="w-full"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "1px",
          paddingRight: "15px",
          paddingLeft: "15px",
        }}
      >
        <div class="heading-title text-center">
          <h2 class="text-2xl font-bold">{head}</h2>
          <p class="text-sm">{par}</p>
        </div>
      </div>
    </div>
  );
};

export default Head;
