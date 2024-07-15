import React from 'react'
import { ABOUTMANGA } from '../components/aboutmanga'
import { NAVBAR } from '../components/navbar';

export const SINGLEMANGA = ({currentmanga, Targetchapter}) => {
  
  
  return (
    <div style={{backgroundColor:'black' , height:'100vh'}}>
        <NAVBAR/>
        <ABOUTMANGA currentmanga={currentmanga} Targetchapter={Targetchapter} />
        
    </div>
  )
}
