import React from 'react'
import Link from 'next/link'

type Props ={
    category: string;
    isActive: boolean;
}
const NavLink = ({category, isActive}: Props) => {
  return (
    <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-[#EF4E1B] underline-offset-4 font-bold text-lg'}`}>
        {category}
    </Link>
  )
}

export default NavLink