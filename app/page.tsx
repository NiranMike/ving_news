import React from 'react'
import { categories } from '../constants'
import fetchNews from "../util/fetchNews"

const Home = async () => {
  const news: NewsResponse = await fetchNews(categories.join(','))
  console.log(news)
  return (
      <div>
          {/* news list */}
    </div>
  )
}

export default Home