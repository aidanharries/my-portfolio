import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-3.svg";
import HeaderSocials from './HeaderSocials';
import Floats from './Floats';

const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className='intro'>
                <img src={Me} alt='' className='home_img' />
                <h1 className='home_intro'>Hello! I'm</h1>
                <h1 className="home_name">Aidan Harries</h1>
                <span className="home_education">I'm a Computer Engineer</span>

                <HeaderSocials />

                <a href="#about" className="btn">View my work</a>
            </div>

           <Floats /> 
        </section>
    )
}

export default Home