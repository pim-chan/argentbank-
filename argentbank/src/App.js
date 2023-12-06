import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import SignIn from './pages/SignIn';
import User from './pages/User';

const App = () => {
  
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path="/profil" element={<User />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
