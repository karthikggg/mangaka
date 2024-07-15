import React, { useState } from 'react';


export const MANGAREAD = ({currentchapter}) => {
  console.log(currentchapter + 'pp');
  
    
  
    return (
      <div>
        <div>
          <embed src={`/manga pdf/${currentchapter}.pdf`} height={'759vh'} width={'1600vw'} />
        </div>
      </div>
    );
  };
  
 