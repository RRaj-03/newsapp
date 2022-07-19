import React, { useState, useEffect } from "react";
import NewsItem from "./newsItem";
import Spinner from "./spinner";
import InfiniteScroll from 'react-infinite-scroll-component';


export default function News(props) {
    const apiKey='be9dc743000345c0b16bd68eba1e0fb4'
    const date= new Date
    const [loading, setLoading] = useState(true)
    const [article, setArticle] = useState([])
    const [totalresults, setTotalresults] = useState(0)
    const [page, setPage] = useState(1)
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    const updateNews = async () => {
        setLoading(true)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        const url2= `https://newsapi.org/v2/everything?q=${props.search.searchText}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&to=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        const data = await fetch(props.search.search?url2:url);
        const prasedData = await data.json()
        setArticle(prasedData.articles);
        setTotalresults(prasedData.totalresults)
        setLoading(false)
    }
    useEffect(() => { updateNews() }, [])
    useEffect(() => { updateNews() }, [props.search])

    const fetchData= async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        const url2= `https://newsapi.org/v2/everything?q=${props.search.searchText}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&to=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1) 
        const data = await fetch(props.search.search?url2:url);
        let parsedData = await data.json()
        setArticle(article.concat(parsedData.articles))
        setTotalresults(parsedData.totalResults)
      };

    return (<>
        {loading && <Spinner />}
        <h1 className="text-center mt-3">Headlines-<span className="text-uppercase">{props.search.search?props.search.searchText:props.category}</span></h1>
        <InfiniteScroll
            dataLength={article.length} //This is important field to render the next data
            next={fetchData}
            hasMore={article.length!=totalresults}
            loader={<Spinner/>}>
            <div className="container my-3">
                <div className="row">
                    {article.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgurl={element.urlToImage} source={element.source.name} author={element.author} publishDate={element.publishedAt}/>
                        </div>
                    }
                    )}
                </div>
            </div>
        </InfiniteScroll>
    </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general'
}