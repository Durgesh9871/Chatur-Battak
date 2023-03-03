import { Box } from '@chakra-ui/react'
import React from 'react'

const StackBox = ({count , color ,border,text}) => {

 
  return (
    <Box border={`2px  ${border}`} height="30px" width="100px"  background={color} color={text} padding="10px">
         <h1>{count}</h1>
      
    </Box>
  )
}

export  {StackBox}
