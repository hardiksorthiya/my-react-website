import React from 'react';
import Navbar from '../../../Include/Navbar/Navbar';
import Footer from '../../../Include/Footer/Footer';
import Breadcrumb from '../MobileApp/Breadcum';
import breadcrumbData from '../Data/breadcrumbData';
import whyusData from '../Data/whyusData';
import aboutData from '../Data/aboutData';
import contactData from '../Data/contactData';
import faqData from '../Data/faqData';
import '../../../../assets/css/services.css'; // Importing the CSS file for this component
import About from '../MobileApp/About';
import Whyus from '../MobileApp/Whyus';
import Contact from '../MobileApp/Contact';
import Faq from '../MobileApp/Faq';
import Contactus from '../../Home/Contact';

export default function Index() {
  return (
    <>
   <Navbar />
   <Breadcrumb data={breadcrumbData.migration} /> 
   <About data={aboutData.migration} />
   <Whyus data={whyusData.migration}/>
   <Contact data={contactData.migration}/>
   <Faq data={faqData.migration}/>
   <Contactus/>
   <Footer/>
   </>
  )
}
