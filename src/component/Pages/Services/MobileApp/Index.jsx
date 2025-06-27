import React from 'react';
import Navbar from '../../../Include/Navbar/Navbar';
import Footer from '../../../Include/Footer/Footer';
import Breadcrumb from '../../../Pages/Services/MobileApp/Breadcum';
import breadcrumbData from '../../../Pages/Services/Data/breadcrumbData';
import whyusData from '../../../Pages/Services/Data/whyusData';
import aboutData from '../../../Pages/Services/Data/aboutData';
import contactData from '../../../Pages/Services/Data/contactData';
import faqData from '../../../Pages/Services/Data/faqData';
import '../../../../assets/css/services.css'; // Importing the CSS file for this component
import About from '../../../Pages/Services/MobileApp/About';
import Whyus from '../../../Pages/Services/MobileApp/Whyus';
import Contact from '../../../Pages/Services/MobileApp/Contact';
import Faq from '../../../Pages/Services/MobileApp/Faq';
import Contactus from '../../Home/Contact';

export default function Index() {
  return (
    <>
   <Navbar />
   <Breadcrumb data={breadcrumbData.mobileapp} /> 
   <About data={aboutData.mobileapp} />
   <Whyus data={whyusData.mobileapp}/>
   <Contact data={contactData.mobileapp}/>
   <Faq data={faqData.mobileapp}/>
   <Contactus/>
   <Footer/>
   </>
  )
}
