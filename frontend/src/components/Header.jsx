import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import Navbar from "./Navbar";
import { CgMenuLeft } from "react-icons/cg";
import { TbUserCircle } from "react-icons/tb";
import { RiUserLine, RiShoppingBag4Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed top-0 w-full left-0 right-0 z-50">
      <div
        className={
          "bg-white py-2.5 max-padd-container flexBetween border-b border-slate-900/10 rounded transition-all duration-300"
        }
      >
        {/* Logo */}
        <Link to={"/"} className="flex-1 flex items-center justify-start">
          <img
            src={logoImg}
            alt=""
            height={36}
            width={36}
            className="hidden sm:flex mr-2"
          />
          <h4 className="bold-24">Bacala</h4>
        </Link>
        {/* Navbar */}
        <div className="flex-1">
          <Navbar />
        </div>
        {/* Right Side */}
        <div>
          <CgMenuLeft />
          <Link to={"/cart"}>
            <RiShoppingBag4Line />
          </Link>
          <div>
            <div>
              <button className="btn-outline flexCenter gap-x-2">
                Login <RiUserLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
