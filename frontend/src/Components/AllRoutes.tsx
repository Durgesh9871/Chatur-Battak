import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Akshay_Folder/pages/Homepage";
import JoinGame from "../Akshay_Folder/pages/JoinGame";
import Lns from "../Akshay_Folder/pages/LnS";
import NewGame from "../Akshay_Folder/pages/NewGame";
import { DisplayData } from "../DisplayData";
import { Login } from "../Sumit_Folder/Login";
import { Signup } from "../Sumit_Folder/Signup";
import PrivateRoute from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Lns />}></Route>
      <Route path="/homepage" element={<Homepage />}></Route>
      <Route path="/newgame" element={<NewGame />}></Route>
      <Route path="/joingame" element={<JoinGame />}></Route>
      <Route path="/game" element={<DisplayData />} />
    </Routes>
  );
};

export default AllRoutes;
