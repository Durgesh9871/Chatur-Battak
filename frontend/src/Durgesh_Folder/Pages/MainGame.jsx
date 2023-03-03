import { Box, Button, Img } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"
import croco from "./Croco.png"
import myAudioFile from './audio.mp3';
import beach from "./beach.mp3"
import {RxSpeakerQuiet} from "react-icons/rx"



const MainGame = () => {

    const audioRef = useRef(null);
    const beachRef = useRef(null)

  const handlePlayClick = () => {
    audioRef.current.play();
    beachRef.current.play();
  };

  const handlePauseClick = () => {
    audioRef.current.pause();
    beachRef.current.pause();
  };
    
  const handleSpeaker = ()=>{

  }

  return (
    <Box className='mainGameBox' overflow="hidden" >
         
        {/*  Water is here ------------- */}
        
        <Box className='waterMain'>
            {/* Audio */}
        <audio src={myAudioFile} loop ref={audioRef} />
        <audio src={beach} loop ref={beachRef} />
      <button onClick={handlePlayClick}>Play</button>
      <button onClick={handlePauseClick}>Pause</button>

      <Box > <RxSpeakerQuiet onClick={handleSpeaker} style={{border:"1px solid black" , fontSize:"20px" , borderRadius:"100%" ,padding:"10px" , cursor:"pointer"}}/> </Box>
        


       <Box  display="flex"   > 
         <Box className='sky'>
            <Img src={sky} alt="sky1" height="250px" />
         </Box>
         <Box className='sky2'>
            <Img src={sky} alt="sky2" height="300px" />
         </Box>
         
        </Box>

         {/* Croco */}
         <Box  >

        <Box className='crocoLunch'> </Box>
        <Box className='crocoLunchRotate'></Box>

        </Box>

       
      

         

        

        </Box>
       
    </Box>
  )
}

export  {MainGame}
