import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MarkdownRenderer from './Components/MarkdownRenderer';
import NotFound from './Components/NotFound'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<Navigate replace to="/markdown/home" />} />

          <Route path="/markdown/*" element={<MarkdownRenderer />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} /> 

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
