import React from 'react';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';
import Breadcrumb from './Data/Breadcrumb';
import breadcrumbData from './Data/breadcrumbData';
import Contactus from './Data/Contactus';
import Services from './Data/Services';
import servicesData from './Data/servicesData';
import TechCTASection from './Data/HireSection';
// import OurExpertise from './Data/OurExpertise';
import Whyus from './Data/Whyus';
import whyData from './Data/whyusData';

export default function Index() {
  return (
    <>
   <Navbar />
   <Breadcrumb data={breadcrumbData.nodejs} />
   <Services data={servicesData.nodejs} />
   <TechCTASection/>
   {/* <OurExpertise/> */}
   <Whyus data={whyData.nodejs} />
   <Contactus/>
   <Footer/>
   </>
  )
}
