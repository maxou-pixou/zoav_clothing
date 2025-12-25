import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { HiOutlineCollection } from "react-icons/hi"
import { IoBookOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

import BrandLogo from "@/components/BrandLogo"

const MENU = [
  { title: "Home", to: "/home", logo: <AiOutlineHome className="h-6 w-6" /> },
  { title: "Dummy", to: "/dummy", logo: <HiOutlineCollection className="h-6 w-6" /> },
  { title: "Buy", to: "/buy", logo: <IoBookOutline className="h-6 w-6" /> },
  { title: "Cart", to: "/cart", logo: <IoCartOutline className="h-6 w-6" />, alignRight: true },
  { title: "Login", to: "/auth", logo: <CiLogin className="h-6 w-6" />, alignRight: true },
]
const Navbar = () => {
  const [menuSelected, menuSetSelected] = useState(0)

  useEffect(() => {
    const index = MENU.findIndex(e => location.pathname.includes(e.to))
    menuSetSelected(index)
  }, [location])

  return (
    <div className="w-full bg-primary h-16">
      <div className="flex flex-row gap-2 justify-between items-center p-2 pl-4 pr-4 h-full">
        <BrandLogo variant="white" />
        <div className="flex flex-row gap-2">
          {MENU.filter(menu => !menu.alignRight).map((menu, index) => (
            <NavLink
              to={menu.to}
              key={menu.title}
              className={({ isActive }) => `px-2 py-1 rounded flex items-center text-sm 
                ${isActive 
                ?  "bg-white text-primary" : 
                "text-white hover:bg-secondary hover:text-primary"
                }`}
              onClick={() => menuSetSelected(index)}
            >
              {menu.logo}
              <p className="text-xs font-semibold text-center ml-2">{menu.title}</p>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          {MENU.filter(menu => menu.alignRight).map((menu, index) => (
          <NavLink
            to={menu.to}
            key={menu.title}
            className={({ isActive }) => 
              `px-2 py-1 rounded flex items-center text-sm ml-auto 
            ${isActive ? 
              "bg-white text-primary" : 
              "text-white hover:bg-secondary hover:text-primary"
            }`
          }
          onClick={() => menuSetSelected(index)}
          >
            {menu.logo}
            <p className="text-xs font-semibold text-center ml-2">{menu.title}</p>
          </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
