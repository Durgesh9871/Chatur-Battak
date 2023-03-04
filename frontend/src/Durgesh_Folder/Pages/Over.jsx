import { Box } from '@chakra-ui/layout'
import React from 'react'
import { GameOver } from '../Components/GameOver'
import "./mainGame.css";


const Over = () => {
  return (
    <Box>
       <Box id="playerWinner" overflow="hidden" display={"block"}>
        {/* Box for crocodile ------- */}
    
        <GameOver />
      </Box>
    </Box>
  )
}

export  {Over}
