// import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { useEffect , useState} from 'react'
import axios from "axios"
function App() {
  const [news, setNews] = useState("")
  const newsItems = news.slice(0,80)

  useEffect(() => {
    const loadNews= async() =>{
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=deb3b99327ec422cb41ec796dbc447c0")
    setNews(response.data.articles)
  };
  loadNews();
},[])

  // console.log("news",news)
  return (
    <div className='p-5 w-full'>
      {/* <Navbar /> */}
      <div className='flex flex-col sm:flex-row gap-16 sm:flex-wrap sm:w-full sm:justify-between w-full'>
          {news&&
            newsItems.map((items, index) =>{
              return(
                  <div className='flex flex-col gap-7 sm:w-2/5 lg:w-1/4 w-full' key={index}>
                    <img src={items.urlToImage} alt="" className='w-full h-full' />
                    <h1 className='font-bold text-xl'>{items.title}</h1>
                    <p className='text-black/50 line-clamp-2 text-ellipsis'>{items.content}</p>
                    <a href={items.url} target="_blank" rel="noopener noreferrer"className='bg-red text-white p-4 w-1/2 text-center'>Read More</a>
                  </div>
              )
            })
          }
          {/* <div className='flex flex-col gap-7'>
            <img src={img1mobile} alt="" className='w-full h-full' />
            <h1 className='font-bold text-5xl'>The Bright Future of Web 3.0?</h1>
            <p className='text-black/50'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?</p>
            <button className='flex-end bg-red text-white p-6 w-1/2'>READ MORE</button>
          </div> */}
          {/* <div className='bg-darkBlue py-5 px-4'>
            <h1 className='text-orange pb-3 text-3xl font-bold'>New</h1>
            <div>
              <h2 className='text-white py-5 text-2xl font-bold'>Hydrogen VS Electric Cars</h2>
              <p className='text-greyishBlue/50 text-sm pb-5'>
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className='border-y-2 border-offWhite/20'>
              <h2 className='text-white py-5 text-2xl font-bold'>The Downsides of AI Artistry</h2>
              <p className='text-greyishBlue/50 text-sm pb-5'>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div>
              <h2 className='text-white py-5 text-2xl font-bold'>Is VC Funding Drying Up?</h2>
              <p className='text-greyishBlue/50 text-sm'>Private funding by VC firms is down 50% YOY. We take a look at what it means </p>
            </div>
           
          </div> */}
        </div>
        {/* <div className='flex flex-col gap-7'>
          <div className="flex w-full">
            <div className='max-w-2/6'>
              <img src={img2} alt="" className='w-4/5'/>
            </div>
            <div className='flex flex-col w-full'>
              <h1 className='text-4xl text-black/50 font-bold'>01</h1>
              <h2 className='text-lg font-bold'>Reviving Retro PCs</h2>
              <p className='text-sm text-black/50'>What happens when old PCs are goven modern upgrades?</p>
            </div>
          </div>
          <div className="flex w-full">
            <div className='max-w-2/6'>
              <img src={img3} alt=""  className='w-4/5'/>
            </div>
            <div className='flex flex-col w-full'>
              <h1 className='text-4xl text-black/50 font-bold'>02</h1>
              <h2 className='text-lg font-bold'>Top 10 Laptops Of 2022</h2>
              <p className='text-sm text-black/50'>Our best Picks for various needs and budgets</p>
            </div>
          </div>
          <div className="flex w-full">
            <div className='max-w-2/6'>
              <img src={img4} alt=""  className='w-4/5'/>
            </div>
            <div className='flex flex-col w-full'>
              <h1 className='text-4xl text-black/50 font-bold'>03</h1>
              <h2 className='text-lg font-bold'>The Growth of Gaming</h2>
              <p className='text-base text-black/50'>How the pandemic has sparked fresh opportunities</p>
            </div>
          </div>
        </div> */}
    </div>
  )
}

export default App

//9703c331ff49bc4ea2235c444860ef2d

