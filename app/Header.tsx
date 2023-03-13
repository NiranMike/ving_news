import React from 'react'
import { Bars3Icon} from "@heroicons/react/24/solid"
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import DarkModeButton from './DarkModeButton'

const Header = () => {
  return (
    <header>
        <div className='grid grid-cols-3 md:p-10 p-5 items-center'>
            <Bars3Icon className='h-8 dark:text-[#DDD9D8] w-8 cursor-pointer' />
            <Link href={'/'} prefetch={false}>
                <h1 className='font-serif text-lg sm:text-2xl md:text-4xl text-center text-[#EF4E1B]'>Ving News</h1>
            </Link>

            <div className='flex items-center justify-end space-x-2'>
                {/* Dark Mode */}
                  <DarkModeButton />
                  <button className='hidden md:inline border-[1.8px] text-[#12151C] bg-transparent dark:border-[#12151C] border-[#12151C] px-4 
                    lg:px-9 py-2 lg:py-3 dark:bg-[#DDD9D8] font-medium '>
                    Subscribe
                </button>
            </div>
          </div>
      <NavLinks />
      
      <SearchBox />
    </header>
  )
}

export default Header