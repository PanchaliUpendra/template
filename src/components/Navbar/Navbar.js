import React from 'react';

import './Navbar.css';
function Navbar(){
    return(
        <div className='sticker'>
            <nav>
                <input type="checkbox" id="check"/>
                    <label htmlFor="check" className='checkbtn'>
                        <i className='fas fa-bars'></i>
                    </label>
                <label className='logo'>Panchali</label>
                <ul>
                    <li><p className='active'>Home</p></li>
                    <li><p>About</p></li>
                    <li><p>Eduction</p></li>
                    <li><p>Skills</p></li>
                    <li><p>Projects</p></li>
                    <li><p>Contact</p></li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;