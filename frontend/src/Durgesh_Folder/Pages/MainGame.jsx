import { Box, Img } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"
import croco from "./Croco.png"
// import croLunch from "./croLunch.gif"



const MainGame = () => {
    
    

  return (
    <Box className='mainGameBox' overflow="hidden" >
        {/*  Water is here ------------- */}
        <Box className='waterMain'>
       <Box  display="flex" justifyContent="space-around"  > 
         <Box className='sky'>
            <Img src={sky} alt="sky1" height="250px" />
         </Box>
         <Box className='sky2'>
            <Img src={sky} alt="sky2" height="300px" />
         </Box>
         
        </Box>

         {/* Croco */}
         <Box display="flex" >

        <Box className='crocoLunch'> </Box>
        <Box className='crocoLunchRotate'></Box>

        </Box>

         

        

        </Box>
       
    </Box>
  )
}

export  {MainGame}
