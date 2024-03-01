import React from 'react'
import { BANNER } from '../components/banner'
import {NAVBAR} from '../components/navbar'
import { ALLMANGAPANEL } from '../components/allmangapanel'

export const EXPLORE = ({mangadata, targetmanga}) => {
  return (
    <div>
        <NAVBAR />
        <BANNER />
        <ALLMANGAPANEL mangadata={mangadata} targetmanga={targetmanga} />
        
    </div>
  )
}
