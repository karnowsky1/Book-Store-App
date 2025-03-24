import React from 'react'
import { TbHomeFilled } from 'react-icons/tb'
import { IoLibrary, IoMailOpen } from "react-icons/io5"
import { FaRegWindowClose } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles, toggleMenu, menuOpened}) => {
  const navItems = [
    {to: '/', label: 'Home', icon: <TbHomeFilled/>},
    {to: '/shop', label: 'Shop', icon: <IoLibrary/>},
    {to: '/contract', label: 'Home', icon: <IoMailOpen/>},
  ]
  return (
    <nav className={containerStyles}>
      {navItems.map(({to, label, icon}) => (
        <div key={label} className='inline-flex relative top-1'>
          <NavLink to={to} className={({isActive}) => isActive ? 'active-link flexCenter gap-x-2' : 'flexCenter gap-x-2'}>
            <span className='text-xl'>{icon}</span>
            <span className='medium-16'>{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default Navbar