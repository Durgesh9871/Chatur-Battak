import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Akshay_Folder/pages/Homepage";
import { DisplayData } from "../DisplayData";
import { Login } from "../Sumit_Folder/Login";
import { Signup } from "../Sumit_Folder/Signup";
import PrivateRoute from "./PrivateRoutes";

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} />
        <Route
          path="/game"
          element={
            <PrivateRoute>
              <DisplayData />
            </PrivateRoute>
          }
        />
      </Routes>
  );
};

export default AllRoutes;
