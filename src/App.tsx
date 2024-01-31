// import { Routes } from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home'
import SharedLayout from './Components/SharedLayout/SharedLayout';
import Services from './Pages/Services/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=> {
      setIsLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      {
        isLoading ? <Loader/>
        :
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
