import React from 'react'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


function SidebarButtons(props) {
    const location=useLocation()
    const currentPath=location.pathname
  const isActive=currentPath===props.to

  console.log(isActive);
  return (
    <>
    <Link to={props.to}>
    <div className={`flex gap-5 hover:cursor-pointer  `}>
      
    <IconContext.Provider value={{ size: '24', color: isActive ? 'grey' : 'white' }}>
        {props.icon}
        <p className={`text-white  ${isActive && "text-slate-500"}`}>{props.title}</p>
        </IconContext.Provider>
    </div>
        </Link>
        </>
   
  )
}

export default SidebarButtons
