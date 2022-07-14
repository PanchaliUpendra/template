import React from 'react';

import github from './github.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';

import './Contact.css';
function Contact(){
    return(
        <div className='contact'>
            <div>
                <div className='Contact-list'>
                    <h1>CONTACT</h1>
                    <div className='mobile'><h2>[+91-9390000682]</h2></div>
                    <div className='mail'><h2>call to Action</h2></div>
                </div>
            <div>
                <div><h1><hr/></h1></div>
                <div className='contact-bottom'>
                    
                    <div className='boot-camp'>
                            <img src={linkedin} className="boot-img" alt="img"/>
                            <img src={github}  className="boot-img" alt="img"/>
                            <img src={twitter}  className="boot-img" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Contact;