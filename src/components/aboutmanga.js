import React from 'react'

export const ABOUTMANGA = ({currentmanga}) => {
  console.log(currentmanga);
  return (
    <div>{currentmanga.map((manga)=>{
      return(
        <div>{manga.name}</div>
      )
    })}</div>
  )
}
