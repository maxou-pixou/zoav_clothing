import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { HiOutlineCollection } from "react-icons/hi"
import { IoBookOutline, IoCartOutline } from "react-icons/io5"
import { CiLogin } from "react-icons/ci"
import { MdOutlinePhotoCamera } from "react-icons/md"

import BrandLogo from "@/components/BrandLogo"

const MENU = [
  { title: "Home", to: "/home", logo: <AiOutlineHome className="h-6 w-6" /> },
  { title: "Dummy", to: "/dummy", logo: <HiOutlineCollection className="h-6 w-6" /> },
  { title: "Catalogue", to: "/buy", logo: <IoBookOutline className="h-6 w-6" /> },
  { title: "Portfolio", to: "/portfolio", logo: <MdOutlinePhotoCamera className="h-6 w-6" /> },
  { title: "Panier", to: "/cart", logo: <IoCartOutline className="h-6 w-6" /> },
  { title: "Se Connecter", to: "/auth", logo: <CiLogin className="h-6 w-6" /> }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState()
  const location = useLocation()

  useEffect(() => {
    setMenuOpen()
  }, [location.pathname])

  return (
    <nav className="w-full bg-primary fixed top-0 z-50">
      <div className="flex items-center justify-between h-16 px-4">
        <BrandLogo variant="white" />

        
        <div className="hidden md:flex gap-2 items-center">
          {MENU.map(menu => (
            <NavLink
              key={menu.title}
              to={menu.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded flex items-center text-sm
                ${isActive
                  ? "bg-white text-primary"
                  : "text-white hover:bg-secondary hover:text-primary"
                }`
              }
            >
              {menu.logo}
              <span className="ml-2 text-xs font-semibold">{menu.title}</span>
            </NavLink>
          ))}
        </div>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-primary flex flex-col px-4 pb-4 gap-2">
          {MENU.map(menu => (
            <NavLink
              key={menu.title}
              to={menu.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded text-sm
                ${isActive
                  ? "bg-white text-primary"
                  : "text-white hover:bg-secondary hover:text-primary"
                }`
              }
            >
              {menu.logo}
              <span className="text-xs font-semibold">{menu.title}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
