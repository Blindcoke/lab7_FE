import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsGallery from './components/GoodsGallery';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/task2">Task 2</Link>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Content />
                <Image />
              </>
            }
          />
          <Route path="/task2" element={<GoodsGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App