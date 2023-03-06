"use client"
import { FormEvent, useState } from "react";
import {useRouter} from "next/navigation"
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"

const SearchBox = () => {
    const [input, setInput] = useState('');
    const router = useRouter();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (!input) return;

        router.push(`/search?term=${input}`)
    } 

  return (
      <form
          onSubmit={handleSubmit}
          className='max-w-6xl mx-auto flex justify-between  items-center px-5'>
        <input
        value={input} 
        onChange={(e)=> setInput(e.target.value)}
        placeholder='Search News..' 
        className='flex-1 w-full h-14 rounded-sm 
        placeholder-[#12151C] dark:placeholder-[#ddd9d8d5]  text-[#12151C] 
        outline-none bg-transparent dark:text-[#EF4E1B]' type="text" />

          <button
              disabled={!input}
              className="text-[#EF4E1B] disabled:text-[#ddd9d8d5]"
              type='submit'>
            <MagnifyingGlassIcon width={32} />
        </button>
    </form>
  )
}

export default SearchBox