import React from 'react'
import { NAVBAR } from '../components/navbar'
import { FIRSTTOWATCH } from '../components/firsttowatch';
import '../components/Style.scss'
import { PREMIUM } from '../components/premium';
import { OFFLINEVIEWING } from '../components/offlineviewing';
import { QUESTIONS } from '../components/questions';
import { Link } from 'react-router-dom';


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
                    <Link to={'/explore'}><span class="button-text">Explore</span></Link>
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
