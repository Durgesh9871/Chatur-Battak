import React from 'react';
import { Routes,Route } from 'react-router-dom';
import {Box} from "@chakra-ui/react"
import Homepage from '../Akshay_Folder/pages/Homepage';
import Lns from '../Akshay_Folder/pages/LnS';
import NewGame from '../Akshay_Folder/pages/NewGame';
import JoinGame from '../Akshay_Folder/pages/JoinGame';
const Allroutes = () => {
  return (
  <Box>
    <Routes>
        <Route path="/" element={<Lns/>}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>
        <Route path="/game" element={<NewGame/>}></Route>
        <Route path="/joingame" element={<JoinGame/>}></Route>
    </Routes>
  </Box>
  );
}

export default Allroutes;
