import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import MobileApp from './component/Pages/Services/MobileApp/Index';
import CloudService from './component/Pages/Services/CloudService/Index';
import Migration from './component/Pages/Services/Migration/Index';
import DevOps from './component/Pages/Services/DevOps/Index';
import Microservices from './component/Pages/Services/MicroService/Index';
import Ai from './component/Pages/Services/Ai/Index';
import './assets/css/style.css';
import './assets/css/media.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <BrowserRouter basename="/my-react-website">
    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services/mobileapp" element={<MobileApp />} />
        <Route path="/services/cloudservice" element={<CloudService />} />
        <Route path="/services/ai" element={<Ai />} />
        <Route path="/services/migration" element={<Migration />} />
        <Route path="/services/devops" element={<DevOps />} />
        <Route path="/services/micro" element={<Microservices/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
