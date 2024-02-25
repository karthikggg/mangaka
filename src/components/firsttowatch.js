import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 3,
    autoplay: true,
  } );
  
  

export const FIRSTTOWATCH = ({mangadata}) => {
  return (
    <div className='first-watch'>
        <h1>Be the First to Read</h1>
        <p>Seinen, Shonen, Harem, Josei, Kodomomuke, Ecchi</p>
        <Splide options={{perPage : 3}} >{mangadata.map((manga)=>{
            return(
                <SplideSlide className='single-slide'  key={manga.id}>
               
                    <img src={manga.img} alt="" />
                    <span>{manga.manga_name}</span>
                
                </SplideSlide>
                
            )
        })}</Splide>
    </div>
  )
}
