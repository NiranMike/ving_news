"use client"
import { categories} from "../constants"
import {usePathname} from "next/navigation"
import NavLink from "./NavLink"

const NavLinks = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    };

  return (
    <nav className='grid mx-2 grid-cols-4 md:grid-cols-7 
    gap-4 pb-10 max-w-6xl border-[#12151C] dark:border-[#DDD9D8] sm:mx-auto border-b text-xs md:text-sm'>
        {
            categories.map((category)=>(
                <NavLink key={category} 
                category={category} 
                isActive={isActive(category)} />
            ))
        }
    </nav>
  )
}

export default NavLinks