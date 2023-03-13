"use client"
import { useRouter } from "next/navigation"

type Props = {
    article: Article
}

const ReadMoreButton = ({ article }: Props) => {
    const router = useRouter();

    const handleClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");
        const url = `/article?${queryString}`;
        console.log(url);
        router.push(url);
    }
  return (
      <button
        onClick={handleClick}
        className="bg-[#EF4E1B] h-10 rounded-b-lg dark:text-[#12151C] hover:bg-[#EF4E1B]"
      >
        Read More
    </button>
  )
}

export default ReadMoreButton