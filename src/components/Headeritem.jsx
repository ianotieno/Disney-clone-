import React from "react";

function Headeritem({ name, Icon }) {
  return (
    <div className="header-item flex items-center space-x-2">
      {Icon && <Icon className="h-6 w-6" />} {/* Render the icon */}
      <h2>{name}</h2> {/* Render the name */}
    </div>
  );
}

export default Headeritem;
