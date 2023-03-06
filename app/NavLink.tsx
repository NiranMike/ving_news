import React from 'react'
import Link from 'next/link'

type Props ={
    category: string;
    isActive: boolean;
}
const NavLink = ({category, isActive}: Props) => {
  return (
    <Link href={`/news/${category}`} className='NavLink'>
        {category}
    </Link>
  )
}

export default NavLink