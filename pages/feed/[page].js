import Article from "../../components/Article"
import { useRouter } from 'next/router'
import Head from 'next/head'

export const Feed = ({pagenumber,articles}) => {
    const router= useRouter();

    return (
        <>
        <Head>
            <title> News Feed</title>
        </Head>
        <div>
            <div className="w-4/5 md:w-1/2 lg:w-2/5 m-auto">
                {articles.map((article,index)=>{
                    return <Article key={index} src={article.urlToImage} title={article.title} description={article.description} url={article.url}/>})}
            </div>
            <div className="mt-6 flex justify-center items-center mb-28">
                <button onClick={()=>{
                    if (pagenumber>1){
                        router.push(`/feed/${pagenumber-1}`)
                    }
                }} className="rounded h-10 px-4 outline-none bg-gradient-to-r from-yellow-500 to-red-500">Previous Page</button>
                <div className="mx-8 "><p> {pagenumber} </p></div>
                <button onClick={()=>{
                    if (pagenumber<5){
                        router.push(`/feed/${pagenumber+1}`)
                    }
                }}  className="rounded h-10 px-4 bg-gradient-to-r from-yellow-500 to-red-500 focus:outline-none" >Next Page</button> 
            </div>
        </div>
        </>
    )
}

export const getServerSideProps =async pageContext => {
    const pagenumber= pageContext.query.page;
    
    if (pagenumber<1 || pagenumber>5){
        return{
            props:{
                articles: [],
                pagenumber:1,
            }
        }
    }
    
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pagenumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
          },
        },
      ).then(res => res.json());
    
      const { articles } = apiResponse;

    return{
        props:{
            articles: articles,
            pagenumber:Number.parseInt(pagenumber),
        }
    }
}

export default Feed
