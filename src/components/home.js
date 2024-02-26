import React from 'react'
import { NAVBAR } from './navbar'
import { FIRSTTOWATCH } from './firsttowatch';
import './Style.scss';
import { PREMIUM } from './premium';
import { OFFLINEVIEWING } from './offlineviewing';
import { QUESTIONS } from './questions';


export const HOME = ({mangadata}) => {
  return (
    <div>
        <NAVBAR />
        <div className="section-1">
            <div className="home-text">
                <h1>Explore your animie experience with mangaka</h1>
                <p>All manga with updated chapters ....</p>
                <div id="container">
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Explore</span>
                  </button>
                </div>
            </div>
            
        </div>
        <div className="section-2"><FIRSTTOWATCH mangadata={mangadata} /></div>
        <PREMIUM />
        <OFFLINEVIEWING/>
        <QUESTIONS />
        


    </div>
  )
}
