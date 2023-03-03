import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"



const MainGame = () => {
    
    

  return (
    <Box className='mainGameBox' overflow="hidden" >
        {/*  Water is here ------------- */}
       <Box className='waterMain' display="flex" justifyContent="space-around" > 
         <Box className='sky'>
            <img src={sky} alt="sky1" />
         </Box>
         <Box className='sky2'>
            <img src={sky} alt="sky2" />
         </Box>
        </Box>
    </Box>
  )
}

export  {MainGame}
