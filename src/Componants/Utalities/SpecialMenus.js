import React from "react";

const SpecialMenus = ({name}) => {
  return (
    <div className=" py-56 page-breadcrumb all-page-title">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenus;
