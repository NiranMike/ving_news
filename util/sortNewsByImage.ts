export default function sortNewsByImage(news: NewsResponse) {
  if (!news || !news.data) {
    return { pagination: { count: 0, limit: 0, offset: 0, total: 0 }, data: [] }; // handle null or undefined case here
  }
  
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNewsResponse= {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };

    return sortedNewsResponse;
}