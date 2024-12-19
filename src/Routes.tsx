import React from 'react';
import PizzaHome from './components/PizzaHome'
import DrinkHome from './components/DrinkHome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PizzaHome />} />
          <Route path="/DrinkHome" element={<DrinkHome />} />
        </Routes>
      </Router>
    </>
  );
}
