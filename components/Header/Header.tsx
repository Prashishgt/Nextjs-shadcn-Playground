import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <div className="border border-b-2 h-[5vh] flex flex-row items-center justify-between">
      <HeaderTitle label="You are one click away from booking a free 15-minute tax consultation." />
      <HeaderSocial />
    </div>
  );
};

export default Header;
