import React from 'react';
import firebase from 'firebase/compat/app';
import Home  from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom'
import { info } from './hook/levels'



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Game />} /> 
      <Route path='/leaderboard' element={<Leaderboard />}/>
    </Routes>
    </>
  );
}

export default App;

