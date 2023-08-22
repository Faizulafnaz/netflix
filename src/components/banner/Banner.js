import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constant/constants'


const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      console.log(response.data.results[0])
      setMovie(response.data.results[randomIndex])
    })   
  }, [])

  
  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:''})`}}>
        <div className="content">
            <h1 className='title'>{movie.title}</h1>
            <div className="banner-button">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie.overview}</h1>
        </div>
        <div className="fade-bottom">
          
        </div>
    </div>
  )
}

export default Banner