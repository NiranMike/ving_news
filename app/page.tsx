import React from 'react'
import { categories } from '../constants'
import fetchNews from "../util/fetchNews"
import NewsList from './NewsList'


const Home = async () => {
  const news: NewsResponse = await fetchNews(categories.join(','))
  // console.log(news)
  return (
      <div>
      <NewsList news={news} />
    </div>
  )
}

export default Home