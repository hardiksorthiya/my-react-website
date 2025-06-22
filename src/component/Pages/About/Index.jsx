import React from 'react';
import Navbar from '../../Include/Navbar/Navbar';
import Breacumb from './Breadcumb'
import Numberstate from '../Home/Numberstate';
import Testimonial from '../Home/Testimonial'
import Faq from '../Home/Faq';
import Contact from '../Home/Contact';
import Footer from '../../Include/Footer/Footer';

export default function About() {
  return (
    <>
   <Navbar />
   <Breacumb/>
   <Numberstate sectionId="about-numberstate"/>
   <Testimonial/>
   <Faq/>
   <Contact/>
   <Footer/>
   </>
  )
}
