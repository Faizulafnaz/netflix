import React, { useState, useEffect } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constant/constants'
import Youtube from  'react-youtube'

const RowPost = (props) => {
  const [movies, setMovie] = useState([])
  const [id, setId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results)
    })
  }, [])
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if (response.data.results.length){
      setId(response.data.results[0])}
    })
  }
  
  return (
    <div className='row'>
        <h2>{ props.title }</h2>
        <div className="posters">
          {
            movies.map((movie) =>
              <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />          
            )
          }

        </div>
        { id && <Youtube videoId={id.key} opts={opts}/>}
    </div>
  )
}

export default RowPost