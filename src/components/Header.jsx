import React from "react";
import { HiHome, HiStar,HiMagnifyingGlass,HiPlayCircle,HiTv } from "react-icons/hi2";
import logo from "./../assets/Images/logo.png";
import Headeritem from "./Headeritem";

function Header() {
  const menu = [
    { name: "HOME", icon: HiHome },
    {name:"SEARCH",icon: HiMagnifyingGlass},
    {name:"SERIES" ,icon :HiPlayCircle},
    {name:"MOVIES",icon:HiTv},
    { name: "ORIGINALS", icon: HiStar },

  ];

  return (
    <div>
      <img src={logo} className="w-[120px] md:w-[115px] object-cover p-2" alt="Logo" />
      <div className="menu">
        {menu.map((item, index) => (
          // Pass the name and icon as props to Headeritem
          <Headeritem key={index} name={item.name} Icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default Header;
