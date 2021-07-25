import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";

// import SearchIcon from "@material-ui/icons/search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="../\logo.png" alt="" className="logo" />
      </div>
      <div className="header__search">{/* <SearchIcon></SearchIcon> */}</div>

      <div className="header__right">
        <HeaderOption title="Find a path" />
        <HeaderOption title="Create a path" />
      </div>
    </div>
  );
}

export default Header;
