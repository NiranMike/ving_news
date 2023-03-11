import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  categories?: Category[] | string, // optional categories parameter of type array of Category or string
  keywords?: string, // optional keywords parameter of type string
  isDynamic?: boolean, // optional isDynamic parameter of type boolean
) => {
  try {
    // graphql query
    const query = gql`
      query myQuery(
        $access_key: String!
        $categories: [String!]!
        $keywords: String
      ) {
        data: myQuery(
          access_key: $access_key
          categories: $categories
          countries: "ng"
          sort: "published_desc"
          keywords: $keywords
        ) {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    `;

    // convert categories array to comma-separated string
    const categoriesString = Array.isArray(categories)
      ? categories.join(",")
      : categories;

    // fetch function with next.js 13 caching
    const res = await fetch(
      "https://camppendletonsouth.stepzen.net/api/coy-tuatara/__graphql",
      {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default", // use no-cache if isDynamic is true, otherwise use default caching
        next: isDynamic ? { revalidate: 0 } : { revalidate: 30 }, // set revalidation interval based on isDynamic parameter
        headers: {
          "Content-Type": "application/json",
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`, // set authorization header using API key from environment variables
        },
        body: JSON.stringify({
          query: query, // set the graphql query
          variables: {
            access_key: process.env.MEDIASTACK_API_KEY, // set the access_key variable using API key from environment variables
            categories: categoriesString, // set the categories variable using the categories parameter
            keywords: keywords, // set the keywords variable using the keywords parameter
          },
        }),
      }
    );

    console.log(
      "LOADING NEW DATA FROM API for categories >>>",
      categories,
      keywords
    );

    const newsResponse = await res.json(); // get the json response from the API
    const myQuery = newsResponse?.data?.myQuery; // get the data from the response, checking for undefined
    const news = myQuery ? sortNewsByImage(myQuery) : []; // sort the news by image if data is defined, otherwise set news to empty array
    return news;
  } catch (error) {
    console.error("Error fetching news: ", error);
    throw error; // throw the error if there is an error fetching the news
  } 
};

export default fetchNews;