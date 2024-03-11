import React from 'react'
import { ABOUTMANGA } from '../components/aboutmanga'
import { NAVBAR } from '../components/navbar';

export const SINGLEMANGA = ({currentmanga}) => {
  
  console.log(currentmanga + 'current manga');
  return (
    <div style={{backgroundColor:'black' , height:'100vh'}}>
        <NAVBAR/>
        <ABOUTMANGA currentmanga={currentmanga} />
        <img src='./manga posters/aot about.jpg' alt="" />
    </div>
  )
}
