import { Box, Button, Img } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"
import croco from "./Croco.png"
import myAudioFile from './audio.mp3';
import beach from "./beach.mp3"
import {RxSpeakerLoud ,RxSpeakerOff } from "react-icons/rx"
import { StackBox } from '../Components/StackBox'
import styled, { keyframes } from 'styled-components';
import Duck from "./duck.png"




const MainGame = () => {
    const [value , setValue] = useState(false)
    const [increaseCount , setIncreaseCount] = useState(3)
    const [showAnimation, setShowAnimation] = useState(true);

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

 
  setIncreaseCount((prev)=>prev-1)

 }
 


  const volumeButtonStyle={
    border:"2px solid #ffff" , fontSize:"22px" , borderRadius:"100%" ,padding:"10px" , cursor:"pointer" ,backgroundColor:"black",color:"#ffff"
  }

  return (
    <Box className='mainGameBox'  >
         
        {/*  Water is here ------------- */}
        <Box id='firstPlayerWinner'>
          
          {/* Box for crocodile ------- */}
          <Box></Box>
          <Box></Box>
        </Box>
         

         {/*  Game Start from here ------------------------ */}
        <Box className='waterMain' display="none">
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
       
       <Box position="absolute" bottom="110px" left="40px"  border="2px  black"  zIndex="4" display="flex">
                    {/* Duck drown in water --------- */}
     {increaseCount == 0 && <Box className='drownDuck'> </Box>}
          {
            Array(increaseCount).fill('').map((_,i)=>{
              return (
                <div key={i} >
                 
             { i === increaseCount-1  &&  <Img src={Duck} position="absolute" bottom="36px" right="3px" width="6vw" border="2px  red" alt="Duck"/>
            }
                  <StackBox  count={i+1} color={i%2 == 0 ? "white" :"black"} border={i%2 == 0 ? "black" :"#ffff"}  text={i%2 == 0 ? "black" :"#ffff"}/>
                </div>
            )
            })
          }
       </Box>
          <Button position="absolute" onClick={handleCount} top="100px" left="240px">plus</Button>
          <Button position="absolute" onClick={handleCountMi} top="60px" left="240px">sub</Button>
      

         

        

        </Box>
       
    </Box>
  )
}


// const stackDecrease = keyframes`
//   from {
//     transform: translateY(-100%);
//   }

//   to {
//     transform: translateY(0);
//   }
// `;

// const AnimatedDiv = styled.div`
//   animation: ${stackDecrease} 1s  ease-in-out ;
//   transform: ${({ show }) => show ? 'translateY(0)' : 'translateY(-100%)'};
// `;





export  {MainGame}
