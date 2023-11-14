
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { useState,useEffect, createContext } from 'react';
import { Routes ,Route} from 'react-router-dom';
import BookingData from './components/BookingData';
import BookingUpdate from './components/BookingUpdate';


export const ApiData = createContext([])


function App() {

  const [data, setData] = useState([]);

const getStoreData = async () => {
  try {
    const res = await fetch("http://localhost:3000/bookings");
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

    <Navbar/>
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route path="/bookings" element={<BookingData/>}/>
      
    </Routes>

    </ApiData.Provider>
    
    </div>
  );
}

export default App;
