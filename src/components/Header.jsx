import React from "react";
import Icon from "../assets/icon.svg";

const Header = () => {
  return (
    <div className="flex">
      <div>
        <img src={Icon} alt="" />
      </div>
      <div>
        <button>Login</button>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Header;
