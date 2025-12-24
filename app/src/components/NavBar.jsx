import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { HiOutlineCollection } from "react-icons/hi"

import BrandLogo from "@/components/Brandlogo"


const MENU = [
  { title: "Home", to: "/home", logo: <AiOutlineHome className="h-6 w-6" /> },
  { title: "Dummy", to: "/dummy", logo: <HiOutlineCollection className="h-6 w-6" /> },
  { title: "Buy", to: "/buy", logo: <HiOutlineCollection className="h-6 w-6" /> },
]
const LOGIN_MENU = { 
  title: "Login", to: "/auth", logo: <HiOutlineCollection className="h-6 w-6" /> 
}

const Navbar = () => {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const index = MENU.findIndex(e => location.pathname.includes(e.to))
    setSelected(index)
  }, [location])

  return (
    <div className="w-full bg-primary h-16">
      <div className="flex flex-row gap-2 justify-between items-center p-2 pl-4 pr-4 h-full">
        <BrandLogo />
        <div className="flex flex-row gap-2">
          {MENU.map((menu, index) => (
            <Link
              to={menu.to}
              key={menu.title}
              className={`px-2 py-1 rounded flex items-center text-sm ${selected === index ? "bg-white text-primary" : "text-white hover:bg-secondary hover:text-primary"}`}
              onClick={() => setSelected(index)}
            >
              {menu.logo}
              <p className="text-xs font-semibold text-center ml-2">{menu.title}</p>
            </Link>
          ))}
        </div>
        <div>
          <Link
            to={LOGIN_MENU.to}
            key={LOGIN_MENU.title}
            className={`px-2 py-1 rounded flex items-center text-sm ml-auto ${location.pathname.includes(LOGIN_MENU.to) ? "bg-white text-primary" : "text-white hover:bg-secondary hover:text-primary"}`}
          >
            {LOGIN_MENU.logo}
            <p className="text-xs font-semibold text-center ml-2">{LOGIN_MENU.title}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
