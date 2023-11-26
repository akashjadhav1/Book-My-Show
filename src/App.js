import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookingData from './components/BookingData';

export const ApiData = createContext([]);

export const App=()=> {
  const [data, setData] = useState([]);

  const getStoreData = async () => {
    try {
      const res = await fetch("https://bookmyshow-higp.onrender.com/bookings");
      const actualData = await res.json();
      setData(actualData);
    } catch (error) {
      // Handle errors here
    }
  };

  
  

  useEffect(() => {
    getStoreData();
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className="App bg-black">
      <ApiData.Provider value={data}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage getStoreData={getStoreData}/>} />
          <Route path="/bookings" element={<BookingData getStoreData={getStoreData}/>} />
        </Routes>
      </ApiData.Provider>
    </div>
  );
}







