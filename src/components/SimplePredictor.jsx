import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

export default function SimplePredictor() {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(null);
  
  //Definir opciones predeterminadas
  const [selections, setSelections] = useState({
    ram: "6",
    storage: "128",
    battery: "4000",
    camera: "48MP",
    display: "AMOLED",
    network: "4G"
  });

  const handleChange = (e) => {
    setSelections({ ...selections, [e.target.name]: e.target.value });
  };

  const predict = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:8000/predict', {
        internal_storage: parseFloat(selections.storage),
        storage_ram: parseFloat(selections.ram),
        battery: parseInt(selections.battery),
        primary_camera: selections.camera,
        display: selections.display,
        network: selections.network
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
    <div className="max-w-3xl m-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">Samsung Price Predictor Simplificado</h1>
      <p className="text-gray-600 mb-6 text-center">Selecciona las características que deseas en tu teléfono</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* RAM */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-3">Memoria RAM</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="ram"
                value="4"
                checked={selections.ram === "4"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Básica (4GB) - Para uso casual</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="ram"
                value="6"
                checked={selections.ram === "6"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Media (6GB) - Para uso diario</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="ram"
                value="8"
                checked={selections.ram === "8"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Alta (8GB) - Para multitarea</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="ram"
                value="12"
                checked={selections.ram === "12"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Premium (12GB) - Para gaming y apps exigentes</span>
            </label>
          </div>
        </div>

        {/* Almacenamiento */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-3">Almacenamiento</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="storage"
                value="64"
                checked={selections.storage === "64"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Básico (64GB) - Pocas apps y fotos</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="storage"
                value="128"
                checked={selections.storage === "128"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Medio (128GB) - Uso regular</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="storage"
                value="256"
                checked={selections.storage === "256"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Alto (256GB) - Muchas apps y fotos</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="storage"
                value="512"
                checked={selections.storage === "512"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Premium (512GB) - Videos, juegos y todo tipo de archivos</span>
            </label>
          </div>
        </div>

        {/* Batería */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-3">Batería</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="battery"
                value="3000"
                checked={selections.battery === "3000"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Básica (3000mAh) - Uso ligero</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="battery"
                value="4000"
                checked={selections.battery === "4000"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Media (4000mAh) - Uso diario normal</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="battery"
                value="5000"
                checked={selections.battery === "5000"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Alta (5000mAh) - Uso intensivo</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="battery"
                value="6000"
                checked={selections.battery === "6000"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Premium (6000mAh) - Para no recargar en todo el día</span>
            </label>
          </div>
        </div>

        {/* Cámara */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-3">Cámara</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="camera"
                value="12MP"
                checked={selections.camera === "12MP"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Básica (12MP) - Fotos sencillas</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="camera"
                value="48MP"
                checked={selections.camera === "48MP"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Media (48MP) - Buenas fotos</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="camera"
                value="64MP"
                checked={selections.camera === "64MP"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Alta (64MP) - Fotos de gran calidad</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="camera"
                value="108MP"
                checked={selections.camera === "108MP"}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-600"
              />
              <span>Premium (108MP) - Fotos profesionales</span>
            </label>
          </div>
        </div>

        {/* Pantalla */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-3">Tipo de Pantalla</h3>
          <select
            name="display"
            value={selections.display}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="LCD">LCD - Calidad básica</option>
            <option value="AMOLED">AMOLED - Colores vibrantes, negro profundo</option>
            <option value="Dynamic AMOLED">Dynamic AMOLED - La mejor calidad de pantalla</option>
          </select>
        </div>

        {/* Red */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-3">Tipo de Red</h3>
          <select
            name="network"
            value={selections.network}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="4G">4G - Velocidad estándar</option>
            <option value="5G">5G - Máxima velocidad</option>
          </select>
        </div>
      </div>

      <button
        onClick={predict}
        disabled={loading}
        className={`w-full py-3 text-white font-bold rounded-md transition-colors
          ${loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
      >
        {loading ? 'Calculando...' : 'Calcular Precio'}
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

          {/* Recomendación basada en la selección */}
          <div className="mt-4 p-3 bg-white rounded border border-indigo-200 text-sm text-gray-700">
            {price > 600 ? 
              "Estás eligiendo características premium que se encuentran en modelos como el Galaxy S o Galaxy Note." :
              price > 300 ? 
              "Estas características son típicas de la serie Galaxy A de gama media." :
              "Estás seleccionando características básicas que encontrarías en la serie Galaxy M."
            }
          </div>
        </div>
      )}
    </div>
  );
}