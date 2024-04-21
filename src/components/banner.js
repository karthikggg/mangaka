import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
export const BANNER = () => {
  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    height       : '90vh',
  };
  return (
    <div>
    <Splide options={ options }   aria-labelledby="autoplay-example-heading" hasTrack={false}>
      <div className='banners' style={ { position: 'relative' } }>
      <SplideTrack>

        <SplideSlide >
          <div className='aot'>
            <div className='banner-content'>
             <img className='animie-logo' src="./banners/aotlogo.png" alt="dfd" />
             <p>Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans, Attack on Titan follows protagonist Eren Yeager, along with friends Mikasa Ackerman and Armin Arlert.</p>
             <button id="bottone1"><strong>Read now</strong></button>
            </div>
         
          </div>
        </SplideSlide> 
     
        <SplideSlide>
          <div className='opm'>
            <div className="banner-content">
            <img className='animie-logo' src="./banners/opmlogo.png" alt="dfd" />
            <p>One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga …</p>
            <button id="bottone1"><strong>Read now</strong></button>
            </div>
           
          </div>
        </SplideSlide>
      
        <SplideSlide>
          <div className='deathnote'>
            <div className='banner-content'>
            <img className='animie-logo' src="./banners/death note logo.png" alt="dfd" />
            <p>Death Note (stylized in all caps) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from December 2003 to May 2006, with its chapters collected in 12 tankōbon volumes. The story follows Light …</p>
            <button id="bottone1"><strong>Read now</strong></button>

            </div>

          </div>
        </SplideSlide>

        <SplideSlide>
          <div className='onepiece'>
            <div className="banner-content">
            <img className='animie-logo' src="./banners/one piece logo.png" alt="dfd" />
            <p>One Piece stylized in all caps is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha 's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023.</p>
            <button id="bottone1"><strong>Rean now</strong></button>
  

            </div>

          </div>
        </SplideSlide>

      </SplideTrack>
      </div>
    </Splide>

    
    </div>
  )
}
