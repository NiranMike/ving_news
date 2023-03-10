import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,
) => {
    // graphql query
    const query = gql`
     query myQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
     ) {
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "ng"
            sort:"published_desc"
            keywords: $keywords
        ) {
            data {
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
        }`
     
    // fetch function with next.js 13 caching
    const res = await fetch('https://camppendletonsouth.stepzen.net/api/coy-tuatara/__graphql', {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query: query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            }
        })
    }
    );
    console.log(
        "LOADING NEW DATA FROM API for category >>>",
        category,
        keywords
    );

    const newsResponse = await res.json();


    // sort function by images vs not images present
    const news = sortNewsByImage(newsResponse)
    // return res
    return news
};

export default fetchNews

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=5a97caf8b3e84b5e4ec0eddcb158d07f&countries=ng%2Cgb&limit=100&offset=0&sort=published_desc"import { categories } from './../constants';
