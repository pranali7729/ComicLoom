// import React from 'react'
import {Link} from "react-router-dom"
import { FaGripLines } from "react-icons/fa"
const Navbar1 = () => {
   const links=[
    {
    title:"Home",
    link:"/",
   },
   {
    title:"All Books",
    link:"/all-books",
   },
   {
    title:"Cart",
    link:"/cart",
   },
   {
    title:"Profile",
    link:"/profile",
   },
   ];
   return(
    <>
    <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
        <img 
        className="h-10 me-4"
        src="" 
        alt="logo" 
        />
        <h1 className="text-2xl font-semibold">BookHeaven</h1>
        </Link>
        <div className="nav-links-bookheaven block md:flex items-center gap-4">
            <div className="hidden md:flex gap-4">
            {links.map((items,i)=>(
                <Link
                to={items.link}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
                >
                    {items.title}{" "}
                    </Link>
                ))}
            </div>
            <div className="hidden md:flex gap-4">
            {links.map((items,i)=>(
                <Link
                to={items.link}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
                >
                    {items.title}{" "}
                    </Link>
                ))}
            </div>
            <button className="text-white text-2xl hover:text-zinc-400">
                <FaGripLines/>
            </button>
        </div>
    </nav>
    <div className="bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center">
    {links.map((items,i)=>(
                <Link
                to={items.link}
                className="text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300"
                key={i}
                >
                    {items.title}{" "}
                    </Link>
        ))}
        <div className="hidden md:flex gap-4">
            {links.map((items,i)=>(
                <Link
                to={items.link}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
                >
                    {items.title}{" "}
                    </Link>
                ))}
            </div>
    </div>
    </>
   )
}

export default Navbar1