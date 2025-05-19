import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'
import { Link } from 'react-router-dom';

export default function Predictor() {
  const [input, setInput] = useState({ ram: '', storage: '', battery: '', camera: '' });
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const predict = async () => {
  setLoading(true);
  try {
    const res = await axios.post('http://127.0.0.1:8000/predict', {
      internal_storage: parseFloat(input.storage),
      storage_ram: parseFloat(input.ram),
      battery: parseInt(input.battery),
      primary_camera: input.camera,
      display: "AMOLED", 
      network: "4G"      
    });
    setPrice(res.data.predicted_price);
  } catch (err) {
    alert('Error al predecir. Revisa consola.');
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-3xl m-auto  p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">Samsung Price Predictor</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">RAM (GB)</label>
          <input
            type="number"
            name="ram"
            value={input.ram}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Ej. 8"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Storage (GB)</label>
          <input
            type="number"
            name="storage"
            value={input.storage}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Ej. 128"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Battery (mAh)</label>
          <input
            type="number"
            name="battery"
            value={input.battery}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Ej. 4500"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Camera</label>
          <input
            type="text"
            name="camera"
            value={input.camera}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Ej. 108MP"
          />
        </div>
      </div>

      <button
        onClick={predict}
        disabled={loading}
        className={`w-full py-3 text-white font-bold rounded-md transition-colors
          ${loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
      >
        {loading ? 'Prediciendo...' : 'Predecir Precio'}
      </button>

      {price !== null && (
  <div className="mt-8 p-6 bg-indigo-50 border border-indigo-300 rounded-lg text-center">
    <div className="text-2xl font-semibold text-indigo-800">
      Precio Aproximado: <span className="text-indigo-900">${price}</span>
    </div>
    
    <div className="mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium" 
         style={{
           backgroundColor: 
             price > 600 ? '#c5f0da' : 
             price > 300 ? '#e0e7ff' : 
             '#fee2e2',
           color: 
             price > 600 ? '#047857' : 
             price > 300 ? '#4338ca' : 
             '#b91c1c'
         }}>
      {price > 600 ? 'Gama Alta' : price > 300 ? 'Gama Media' : 'Gama Básica'}
    </div>
  </div>
)}
<Link
  to="/simplePredictor"
  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all"
>
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
       stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75L21 12m0 0l-6.75 5.25M21 12H3" />
  </svg>
  Ir a Predicción Simple
</Link>
    </div>

  );
}