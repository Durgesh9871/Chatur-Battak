import { Box, Button, Img } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"
import croco from "./Croco.png"
import myAudioFile from './audio.mp3';
import beach from "./beach.mp3"
import {RxSpeakerLoud ,RxSpeakerOff } from "react-icons/rx"
import { StackBox } from '../Components/StackBox'



const MainGame = () => {
    const [value , setValue] = useState(false)
    const [increaseCount , setIncreaseCount] = useState(5)

    const audioRef = useRef(null);
    const beachRef = useRef(null)

  const handlePlayClick = () => {
    audioRef.current.play();
    beachRef.current.play();
    setValue(true)
  };

  const handlePauseClick = () => {
    audioRef.current.pause();
    beachRef.current.pause();
    setValue(false)
  };
    
 const handleCount = ()=>{
  setIncreaseCount((prev)=>prev+1)

 }

 
 const handleCountMi = ()=>{
  // let but = document.querySelector(".one0")

  // console.log(but)
  setIncreaseCount((prev)=>prev-1)

 }
 


  const volumeButtonStyle={
    border:"2px solid #ffff" , fontSize:"22px" , borderRadius:"100%" ,padding:"10px" , cursor:"pointer" ,backgroundColor:"black",color:"#ffff"
  }

  return (
    <Box className='mainGameBox' overflow="hidden" >
         
        {/*  Water is here ------------- */}
        
        <Box className='waterMain'>
            {/* Audio */}
        <audio src={myAudioFile} loop ref={audioRef} />
        <audio src={beach} loop ref={beachRef} />
      {/* <button onClick={handlePlayClick}>Play</button>
      <button onClick={handlePauseClick}>Pause</button> */}

      <Box zIndex="10" position="absolute"  right="15px" top="10px">{value ?  <RxSpeakerLoud onClick={handlePauseClick} style={volumeButtonStyle} /> : <RxSpeakerOff onClick={handlePlayClick} style={volumeButtonStyle} /> } </Box>
        


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

      
      {/*  Stack game of student-----------------------  */}
       
       <Box position="absolute" bottom="130px" left="40px" border="2px solid black" height="400px" zIndex="4" display="flex">
          {
            Array(increaseCount).fill('').map((_,i)=>{
              return (
                <div key={i} className={`one${i}`}>
                 
             { i === increaseCount-1  &&  <Img src="data:image/jpeg;base64,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"  width="50px" alt="chick" />
                }
                  <StackBox count={i+1} />
                </div>
            )
            })
          }
       </Box>
          <Button position="absolute" onClick={handleCount} bottom="100px" left="240px">hello</Button>
          <Button position="absolute" onClick={handleCountMi} bottom="60px" left="240px">hello</Button>
      

         

        

        </Box>
       
    </Box>
  )
}

export  {MainGame}
