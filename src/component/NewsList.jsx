import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { useParams }from "react-router-dom"

export default function () {
  const { category } = useParams();
  const [news, setNews] = useState("")
const newsItems = news.slice(0,80)

useEffect(() => {
  const loadNews= async() =>{
  const response = await axios.get("https://gnews.io/api/v4/top-headlines?category=${category}&country=us&apikey=78d6be771e1e9792df2333dcfba57b5c")
  setNews(response.data.articles)
};
loadNews();
},[category])

console.log("news",news)
  return (
    <div className='flex flex-col sm:flex-row gap-16 sm:flex-wrap sm:w-full sm:justify-between w-full'>
    {news&&
      newsItems.map((items, index) =>{
        return(
            <div className='flex flex-col gap-7 sm:w-2/5 lg:w-1/4 w-full' key={index}>
              <img src={items.image} alt="" className='w-full h-full' />
              <h1 className='font-bold text-xl'>{items.title}</h1>
              <p className='text-black/50 line-clamp-2 text-ellipsis'>{items.content}</p>
              <a href={items.url} target="_blank" rel="noopener noreferrer"className='bg-red text-white p-4 w-1/2 text-center'>Read More</a>
            </div>
        )
      })
    }

  </div>  
  )
}
