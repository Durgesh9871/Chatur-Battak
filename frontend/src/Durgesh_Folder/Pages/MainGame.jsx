import { Box, Img } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"



const MainGame = () => {
    
    

  return (
    <Box className='mainGameBox' overflow="hidden" >
        {/*  Water is here ------------- */}
       <Box className='waterMain' display="flex" justifyContent="space-around" > 
         <Box className='sky'>
            <Img src={sky} alt="sky1" height="300px" />
         </Box>
         <Box className='sky2'>
            <Img src={sky} alt="sky2" />
         </Box>
        </Box>
    </Box>
  )
}

export  {MainGame}
