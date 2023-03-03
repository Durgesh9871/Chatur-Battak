import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./mainGame.css"



const MainGame = () => {
    
    const [flamethrowerActive, setFlamethrowerActive] = useState(false);

  const activateFlamethrower = () => {
    setFlamethrowerActive(true);
    setTimeout(() => {
      setFlamethrowerActive(false);
    }, 3000); // stop animation after 3 seconds
  };


  return (
    <Box className='mainGameBox'>
       <button onClick={activateFlamethrower}>Activate Flamethrower</button>
      <div className={`flamethrower ${flamethrowerActive ? 'active' : ''}`}></div>
    </Box>
  )
}

export  {MainGame}
