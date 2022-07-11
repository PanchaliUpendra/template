import React from 'react';
import './About.css';
import formal from './formal.jpg';
function About(){
    return(
        <div className='thor'>
        <div className='About'>
            <div className='abt-hed'><h2>About Me</h2></div>
            
        </div>
        <div className='about-me-section'>
            <div className='hero'>
                <img src={formal} alt="hero" className='hero-img'/>
            </div>
            <div className='about-section'>
                <p className='about-para'>I describe myself as a passionate developer who loves Coding , Open Source and the Web PlatForm .</p>
                <p className='about-para'>Aside from my studies, I like to create contribute to open source projects. That helps me to learn a
                    ton of new stuff , grow as a developer and support other open source projects.</p>
                <p className='about-para'>Also i enjoy coding program's in my freetime.</p>
                <div className='view-resume'>
                    <h4 className='view-resume-part'>View Resume</h4>
                </div>
            </div>
        </div>
    </div>
    );
}
export default About;