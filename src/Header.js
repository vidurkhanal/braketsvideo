import React from "react";
import "./header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./logo-site.png";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <>
      <div className="logo-mobile">
        {/* Logo */}
        {/* <img
          src={
            "https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
          }
          alt="logo"
        /> */}
        <img src={Logo} alt="logo" />
      </div>
      <header>
        <div className="header__left">
          {/* Icons and all */}
          <div className="header__leftIcon  header__leftIcon--active">
            <HomeIcon />
            <p>Home</p>
          </div>

          <div className="header__leftIcon">
            <LiveTvIcon />
            <p>Live TV</p>
          </div>
          <div className="header__leftIcon">
            <FlashOnIcon />
            <p>Trending</p>
          </div>
          <div className="header__leftIcon">
            <VideoLibraryIcon />
            <p>Library</p>
          </div>
          <div className="header__leftIcon">
            <SearchIcon />
            <p>Search</p>
          </div>
          <div className="header__leftIcon">
            <PersonOutlineIcon />
            <p>Account</p>
          </div>
        </div>
        <div className="header__right">
          {/* Logo */}
          <img src={Logo} alt="logo" />
        </div>
      </header>
    </>
  );
}

export default Header;
