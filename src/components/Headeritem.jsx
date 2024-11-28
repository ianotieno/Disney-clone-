import React from "react";

function Headeritem({ name, Icon }) {
  return (
    <div className="header-item flex items-center  gap-2  text-[18px] font-semibold cursor-pointer gap-3 hover:underline

    underline-offset-8
    ">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}

export default Headeritem;
