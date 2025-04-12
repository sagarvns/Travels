
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css';

function App() {
  return (
    <>
   

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>

      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
