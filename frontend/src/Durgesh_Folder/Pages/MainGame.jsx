import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"



const MainGame = () => {
    
    

  return (
    <Box className='mainGameBox' overflow="hidden" >
        {/*  Water is here ------------- */}
       <Box className='waterMain' > 
         <Box className='sky'>
            <img src={sky} alt="" />
         </Box>
        </Box>
    </Box>
  )
}

export  {MainGame}
