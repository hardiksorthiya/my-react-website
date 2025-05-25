import React from 'react';
import Navbar from '../../Include/Navbar/Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Numberstate from './Numberstate';
import Testimonial from './Testimonial'
import Faq from './Faq';
import Contact from './Contact';
import Footer from '../../Include/Footer/Footer';

export default function Home() {
  return (
    <>
   <Navbar />
   <Hero/>
   <About/>
   <Services/>
   <Numberstate/>
   <Testimonial/>
   <Faq/>
   <Contact/>
   <Footer/>
   </>
  )
}
