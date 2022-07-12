import React from 'react';
import './Education.css';
function Education(){
    return(
        <div className='education'>
            <div className='edu-head'>
                <h2 className='edu-head-part'>Education</h2>
            </div>
            <div className='edu-cont'>
                <div className='edu-cont-primary'>
                    <div className='b-tech'>
                        <h3>Lovely Professional University</h3>
                        <h4>B.Tech Computer Science and Engineering</h4>
                        <h5>CGPA : - 8.30</h5>
                    </div>
                    <div className='b-tech'>
                        <h3>Sri Chaitanya Junior College</h3>
                        <h4>Board of Intermediate Education</h4>
                        <h5>CGPA : - 9.92</h5>
                    </div>
                    <div className='b-tech'>
                        <h3>Lions Club High School</h3>
                        <h4>X-class</h4>
                        <h5>CGPA : - 9.3</h5>
                    </div>
                </div>


            </div>

        </div>

    );
}
export default Education;