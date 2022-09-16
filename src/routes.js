import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./screens/home";
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import Notes from './screens/notes/index'
import UserEdit from './screens/users/edit'

const RoutesTwo = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/notes' element={<Notes/>} />
      <Route path='/users/edit' element={<UserEdit/>} />
    </Routes>
  );
};

export default RoutesTwo;
