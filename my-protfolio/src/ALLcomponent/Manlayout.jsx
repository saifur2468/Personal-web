import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import AboutMe from './About';
import MyServices from './services';
import MySkills from './Tecno';
import Projects from './Project';
import ContactForm from './ContactForm';
import Footer from './Footer';


const Manlayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet /> 
            <Hero></Hero>
            <AboutMe></AboutMe>
            <MyServices></MyServices>
            <MySkills></MySkills>
            <Projects></Projects>
            <ContactForm></ContactForm>
            <Footer></Footer>
            
        </div>
    );
};

export default Manlayout;
