import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MultiStepForm from './components/MultiSteoForm';
import Navbar from './components/Navbar';
import '../src/components/style.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar className="pd-1" />
      <Routes>
        <Route path='/form' element={<MultiStepForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;