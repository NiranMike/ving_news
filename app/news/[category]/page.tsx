import { categories } from "../../../constants"
import fetchNews from "../../../util/fetchNews"
import NewsList from "../../NewsList"

type Props = {
  params: { category: Category}
}

const CategoryNewsPage = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category)

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news}/>
    </div>
  )
}

export default CategoryNewsPage;

export const generateStaticParams = async () => {
  return categories.map(category => ({
    category: category
  }))
}