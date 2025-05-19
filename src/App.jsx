import React from 'react';
import Predictor from './components/Predictor';
import SimplePredictor from './components/SimplePredictor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // <div className='h-screen flex items-center justify-center'>
    //   <Predictor />
    // </div>
     <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Routes>
          <Route path="/" element={<Predictor />} />
          <Route path="/simplePredictor" element={<SimplePredictor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
