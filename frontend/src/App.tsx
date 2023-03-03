import React from 'react';
import './App.css';
import {Box} from "@chakra-ui/react"
// import { DisplayData } from './DisplayData';
import Homepage from "./Akshay_Folder/pages/Homepage"
import NewGame from "./Akshay_Folder/pages/NewGame"
import Allroutes from './AllRoutes/Allroutes';
function App() {
  return (
    <Box>
       {/* <DisplayData /> */}
       {/* <Homepage/> */}
        {/* <NewGame/> */}
        <Allroutes/>
    </Box>
  );
}

export default App;
