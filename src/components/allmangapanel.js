import React from 'react'
import { Link } from 'react-router-dom'
import { SINGLEMANGA } from '../pages/singlemanga'

export const ALLMANGAPANEL = ({mangadata, targetmanga}) => {
  return (
    <div>
      <div className="section">
        <div className="section-title">
          <h1>Exclusive in India</h1>
          <p>Check out these manga only available in Mangaka!</p>
        </div>
        <div className="manga-grid">
          <div className="manga-map">
            {mangadata.map((manga, index)=>{
              return(
                <div key={index}>
                  <Link className='Link' to={'/singlemanga'}>
                  <div key={manga.id} onClick={()=>targetmanga(manga.id)} className="single-manga">
                  <img src={manga.img} alt="" />
                  <p>{manga.manga_name}</p>
                  <span style={{fontWeight:'100'}}>English</span>
                </div>
                </Link>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
