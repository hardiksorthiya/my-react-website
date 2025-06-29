import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import MobileApp from './component/Pages/Services/MobileApp/Index';
import CloudService from './component/Pages/Services/CloudService/Index';
import Migration from './component/Pages/Services/Migration/Index';
import DevOps from './component/Pages/Services/DevOps/Index';
import Microservices from './component/Pages/Services/MicroService/Index';
import PrivacyPolicy from './component/Pages/Other/Privacypolicy';
import RecruitmentPrivacyPolicy from './component/Pages/Other/RecruitmentPrivacyPolicy';
import CookiePolicy from './component/Pages/Other/Cookie';
import CookieSettingPolicy from './component/Pages/Other/CookieSetting';
import Feedback from './component/Pages/Other/Feedback';
import SecurityPolicy from './component/Pages/Other/Security';
import Contact from './component/Pages/Other/Contact';
import Career from './component/Pages/Other/Career';
import OurTeam from './component/Pages/Other/Team';
import Casestudy from './component/Pages/Casestudies/Casestudies';
import CaseStudyPage from './component/Pages/Casestudies/CaseStudyPage';
import CategoryCaseStudies from './component/Pages/Casestudies/CategoryCaseStudies';
import Portfolio from './component/Pages/Portfolio/Portfolio';
import Ai from './component/Pages/Services/Ai/Index';
import './assets/css/style.css';
import './assets/css/media.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/Pages/About/Index';
import ReactTech from './component/Pages/Technology/React';
import Python from './component/Pages/Technology/Python';
import Laravel from './component/Pages/Technology/Laravel';
import Nodejs from './component/Pages/Technology/Nodejs';
import Aiml from './component/Pages/Technology/Aiml';
import Mlops from './component/Pages/Technology/Mlops';
import Spring from './component/Pages/Technology/Spring';

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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/recruitment-privacy-policy" element={<RecruitmentPrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/security" element={<SecurityPolicy />} />
        <Route path="/cookies-settings" element={<CookieSettingPolicy />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Career />} />
        <Route path='/case-study' element={<Casestudy />} />
        <Route path="/case-studies/:id" element={<CaseStudyPage />} />
        <Route path="/case-studies/category/:category" element={<CategoryCaseStudies />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/about' element={<About/>} />
        <Route path="/technology/react" element={<ReactTech />} />
        <Route path="/technology/python" element={<Python />} />
        <Route path="/technology/laravel" element={<Laravel />} />
        <Route path="/technology/nodejs" element={<Nodejs />} />
        <Route path="/technology/aiml" element={<Aiml />} />
        <Route path="/technology/mlops" element={<Mlops />} />
        <Route path="/technology/spring" element={<Spring />} />

        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
