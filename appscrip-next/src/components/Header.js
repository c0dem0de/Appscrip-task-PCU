"use client";

import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";

import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="left-mobile">
          <FiMenu className="hamburger" />
          <img src="/logo.png" className="logo-img" alt="logo" />
        </div>

        <h1 className="logo-text">LOGO</h1>

        <div className="right">
          <FiSearch />
          <FiHeart />
          <FiShoppingBag />
          <FiUser className="desktop-only" />
          <span className="lang desktop-only">
            <span>ENG</span>
            <FiChevronDown className="lang-arrow" />
          </span>
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <nav className="navmenu">
        <a>SHOP</a>
        <a>SKILLS</a>
        <a>STORIES</a>
        <a>ABOUT</a>
        <a>CONTACT US</a>
      </nav>
    </header>
  );
}
