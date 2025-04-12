
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css';
import BusCardSection from './Components/BusCardSection'
import TopDestinations from './Components/TopDestinations'
import VehicleGallery from './Components/VehicleGallery'
import SkylineBanner from './Components/SkylineBanner'


function App() {
  return (
    <>
    
   

    <BrowserRouter>
      <Header />
      <Home/>
      <BusCardSection/>
      <TopDestinations/>
      <VehicleGallery/>
      <SkylineBanner/>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
