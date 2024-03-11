import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useState } from 'react';



export const ABOUTMANGA = ({currentmanga}) => {
  const [chapter , setchapter] = useState('1') 
  
  return (
    <div>{currentmanga.map((manga)=>{
      console.log(manga.chapters);
      return(
        <>
         <div>
          <div className='bg-image' style={{backgroundImage:`url("${manga.img_2}")` } } ></div>
          <div className='about-image' ><img src={manga.img_2} alt="" /></div>
         </div>
         <div className='all-manga-content' style={{color:'white' }}>
         <div className='manga-center'>
           <div className="manga-content">
           <h1>{manga.manga_name}</h1>
           <p>English</p>
         </div> 
         <div>
         <div className="star">
           <MdOutlineStarPurple500 />
           <MdOutlineStarPurple500 />
           <MdOutlineStarPurple500 />
           <MdOutlineStarPurple500 />
           <MdOutlineStarPurple500 />

           </div>
           <p>Average rating: <span>4.9</span></p>
           <p>245 reviews</p>
         </div>
         <button className='button-80'>Start Reading</button>
            <div className="chapter">
          {manga.chapters.map((chap)=>{
            return(
              <div>
                chapter {chap.id}
              </div>
            )
          })}
           
         </div>
         <img src='./manga posters/aot about.jpg' alt="" />

         </div>
      
         

        </div>

      </>
      )
    })}</div>
  )
}
