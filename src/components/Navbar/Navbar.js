import React from 'react';

import './Navbar.css';
function Navbar(){

    function handle(id){
        window.scroll({
            top:id,
            left:0,
            behavior:'smooth'

            })
    }
    return(
        <div className='sticker'>
            <nav>
                <input type="checkbox" id="check"/>
                    <label htmlFor="check" className='checkbtn'>
                        <i className='fas fa-bars'></i>
                    </label>
                <label className='logo'>Panchali</label>
                <ul>
                    <li onClick={()=>handle(0)}><p className='active'>Home</p></li>
                    <li onClick={()=>handle(780)}><p>About</p></li>
                    <li onClick={()=>handle(1440)}><p>Skills</p></li>
                    <li onClick={()=>handle(1760)}><p>Eduction</p></li>
                    <li onClick={()=>handle(2630)}><p>Projects</p></li>
                    <li onClick={()=>handle(4000)}><p>Contact</p></li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;