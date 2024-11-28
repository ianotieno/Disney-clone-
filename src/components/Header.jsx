import React from "react";
import { HiHome, HiStar,HiMagnifyingGlass,HiPlayCircle,HiTv, HiPlusCircle } from "react-icons/hi2";
import logo from "./../assets/Images/logo.png";
import Headeritem from "./Headeritem";

function Header() {
  const menu = [
    { name: "HOME", icon: HiHome },
    {name:"SEARCH",icon: HiMagnifyingGlass},
    { name: "ORIGINALS", icon: HiStar },
    {name:"WATCHLIST",icon:HiPlusCircle},
    {name:"SERIES" ,icon :HiPlayCircle},
    {name:"MOVIES",icon:HiTv},
   

  ];

  return (
    <div className="flex item-center justify-between p-5">
        <div  className="flex gap-8 item-center ">
        <img src={logo} className="w-[120px] md:w-[115px] object-cover p-2" alt="Logo" />
      
      {menu.map((item, index) => (
        // Pass the name and icon as props to Headeritem
        <Headeritem key={index} name={item.name} Icon={item.icon} />
      ))}
        </div>
      
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lTwq_Cb_AwEquAa0B6WNOZCpeZvSiVQq8j7xqw8mJcy-9I4YuIX2lQCPg5w2qaaa42A&usqp=CAU" className="w-[40px] rounded-full "/>
    </div>
  );
}

export default Header;
