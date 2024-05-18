import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import QuizPage from './pages/QuizPage.tsx';
import NoPage from './pages/NoPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
