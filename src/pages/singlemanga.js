import React from 'react'
import { ABOUTMANGA } from '../components/aboutmanga'

export const SINGLEMANGA = ({currentmanga}) => {
  return (
    <div>
        <ABOUTMANGA currentmanga={currentmanga} />
    </div>
  )
}
