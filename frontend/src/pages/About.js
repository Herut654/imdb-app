import React, {useState, useEffect} from 'react';
import './About.css';


 const About = ({singOut, navigateToHome}) => {
  return (
    <div className='about-screen'>
    <h2> about </h2>
    <p> first name : Herut</p>
    <p> last name : Nagasa</p>
    <p> email address : herut_nagasa@walla.com</p>
    <p> department name : software engineer</p>
    <img src ="https://www.zelimudim.co.il/files/collage/plugTest/.3ea241.png"></img>
    <div className='buttons-container'>
        <button onClick={singOut}>singOut</button>
        <button onClick={navigateToHome}>continue in the app</button>
    </div>
      
    </div>
  )
}
export default About;
