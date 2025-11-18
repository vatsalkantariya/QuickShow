import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, Search, Ticket, TicketPlus, X } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useUser()
  const {openSignIn} = useClerk()
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#09090b]/60 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-24 py-4">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets.logo} alt="QuickShow Logo" className="w-36 h-auto" />
        </Link>

        {/* Center: Navigation Links */}
        <div
          className={`${
            isOpen ? "max-md:flex" : "max-md:hidden"
          } absolute max-md:top-0 max-md:left-0 md:static max-md:w-full max-md:h-screen flex flex-col md:flex-row items-center justify-center gap-8 font-medium text-lg z-40 max-md:bg-black/90 md:bg-white/10 md:border border-gray-300/20 md:rounded-full backdrop-blur-md px-8 py-3 transition-all duration-300`}
        >
          <X
            className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
          />

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/movies"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary transition-colors"
          >
            Movies
          </Link>
          <Link
            to="/"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Theaters
          </Link>
          <Link
            to="/"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Releases
          </Link>
          <Link
            to="/favorite"
            className="hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Favorites
          </Link>
        </div>

        {/* Right: Search + Login */}
        <div className="flex items-center gap-6">
          <Search className="max-md:hidden w-6 h-6 cursor-pointer hover:text-primary transition-colors" />

          {/* 🔴 Red Login Button (matches image) */}
          {
            !user ? (<button onClick={openSignIn} className="px-5 py-2 sm:px-8 sm:py-2 bg-[#f84565] hover:bg-[#d63854] text-white rounded-full font-medium cursor-pointer shadow-[0_4px_12px_rgba(248,69,101,0.5)] hover:shadow-[0_6px_16px_rgba(214,56,84,0.6)] transition-all duration-300">
            Login
          </button>) : (
            <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Action label="My Bookings" labelIcon= {<TicketPlus width={15}/>} onClick={()=> navigate('/my-bookings')}  />
                    </UserButton.MenuItems>
                </UserButton>
          )
          }
        {/* Mobile Menu Icon */}
          <Menu
            className="max-md:ml-2 md:hidden w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
