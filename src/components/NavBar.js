import React from "react";
import burger from "../icons/burger.svg";
import Logo from "../icons/rn-logo.svg";

const NavBar = () => {
  return (
    <nav className="h-20 flex px-4 lg:px-32 justify-between items-center ">
      <div className="flex space-x-4 lg:w-1/2">
        <div className="flex flex-row items-center ">
          <img className="h-10 w-10" src={Logo} alt="icon" />
          <div className="hidden lg:flex lg:space-x-8 ml-4">
            <p>playground</p>
            <p>Services</p>
            <p>Case studies</p>
            <p>About me</p>
          </div>
        </div>
        <div className="lg:hidden">
          <div> Melbourne Australia</div>
          <div className="font-bold">6:18:31pm</div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col lg:w-1/2">
        <div> Melbourne Australia</div>
        <div className="font-bold">6:18:31pm</div>
      </div>
      <img
        src={burger}
        alt="burger icon"
        className="w-10 h-10 block lg:hidden"
      />
    </nav>
  );
};

export default NavBar;
