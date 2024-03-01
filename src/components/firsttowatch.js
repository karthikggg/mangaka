import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


  
  

export const FIRSTTOWATCH = ({mangadata}) => {
  return (
    <div className='first-watch'>
        <h1>Be the First to Read</h1>
        <p>Seinen, Shonen, Harem, Josei, Kodomomuke, Ecchi</p>
        <div style={{width:'40rem'}}>
        <Splide  options={{perPage : 4}}  >{mangadata.map((manga)=>{
            return(
                <SplideSlide className='single-slide'  key={manga.id}>
               
                    <img src={manga.img} alt="" />
                    <span>{manga.manga_name}</span>
                
                </SplideSlide>
                
            )
        })}</Splide>
        </div>
    </div>
  )
}