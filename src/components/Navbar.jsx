import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useState } from "react";

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {
    
 const toggleDropdown =()=>{
    setOpenDropdown(!openDropdown)
 }
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-green-600 font-roboto ">E</span>lectro
            </h1>
          </Link>

          <div className="flex gap-2 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div className="-space-y-2">
                <p>{location.county}</p>
                <p>{location.state}</p>
              </div> : "Add Address"}
            </span>
            <FaCaretDown onClick={toggleDropdown}/>
          </div>
          {
            openDropdown ? <div className="w-[250px] h-max shadow-2xl z-50  fixed top-16 left-60  p-5 bg-white border-gray-100 rounded-md">
                <h1 className="mb-3 text-xl flex justify-between ">Change Location <span><CgClose className="cursor-pointer" onClick={toggleDropdown}/></span></h1>
                <button className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-red-400 " onClick={getLocation}>Detect My Location</button>
            </div> : null
          }
        </div>

        {/* Menu section */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-green-600"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-green-600"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-green-600"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-green-600"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <BsCart3 className="h-7 w-7 " />
            <span className="absolute bg-green-600 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-green-600 text-white px-3 py-1 rounded-md cursor-pointer "/>
            </SignedOut>
            <SignedIn>
              <UserButton className="w-2xl"/>
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
