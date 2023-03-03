import { Box } from '@chakra-ui/react'
import React from 'react'

const StackBox = ({count}) => {
  return (
    <Box border="2px solid red" height="30px" width="100px">
         <h1>{count}</h1>
      
    </Box>
  )
}

export  {StackBox}
