import React from 'react'
import { ImClock } from "react-icons/im";
import { LiaExclamationSolid } from "react-icons/lia";
import { PiAirplaneTiltBold } from "react-icons/pi";
import { MdOutlineDevices } from "react-icons/md";




export const PREMIUM = () => {
  return (
    <div className='premium'>
        <h1>Get More with Premium</h1>
        <div className="features">
            <div >
                <ul >
                    <li className="spec">
                        <div className='center'><ImClock className='icon' color='cyan' size={'4rem'}/><p>New chapter shortly after airing in japan</p></div>
                    </li>
                    <li className="spec">
                        <div className='center'><LiaExclamationSolid className='icon' color='orange' size={'5rem'} /><p>Ad-free animie</p></div>
                    </li>
                    <li className="spec" >
                        <div className='center'><PiAirplaneTiltBold className='icon' color='yellow' size={'3.5rem'} /><p>Offline Viewing</p></div>
                    </li>
                    <li className="spec">
                        <div className='center'><MdOutlineDevices className='icon' color='grey' size={'3.5rem'} /><p>Simuntaneously stream on multiple devices</p></div>
                    </li>
                    
                </ul>
            </div>
            <img src="../manga posters/ace.png" alt="" />
        </div>

    </div>
  )
}
