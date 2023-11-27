import React from 'react'
import "./Contact.css"
import cone from "../assets/logo/cone.png"
import ico from "../assets/logo/iso.png"
import sphere from "../assets/logo/sphere.png"
import torus from "../assets/logo/torus.png"
import { Link } from 'react-router-dom'
function Contact(props) {
  return (
    <>
        <div className="contact" id='6'>
                <div  className={`contact_container ${props.mode ? '' : 'lightsss'}`}>
                    <h1>Get in Touch</h1>
                    <p>Want to get in touch?We'd to hear from you.Here's How you can reach us...</p>
                </div>
                <div className={`box_container ${props.mode ? '' : 'lightssss'}`}>
                    <div className={`box ${props.mode ? '' : 'lightss'}`}>
                        <div className="contact_me">
                        <i class="fa-solid fa-address-book"></i>
                            <span>Contact me</span>
                        </div>
                        <div className="contact_content">
                        <div className="box_content">
                            <i class="fa-regular fa-envelope" ></i>
                            <span>wecare@gmail.com</span>
                        </div>
                        <div className="box_content">
                        <i class="fa-brands fa-instagram" ></i>
                            <span>sirkdfa_@003</span>
                        </div>
                        <div className="box_content">
                        <i class="fa-brands fa-twitter" ></i>
                            <span>adslkfd@31</span>
                        </div>
                    </div>
                    </div>
                    <div className={`box ${props.mode ? '' : 'lightss'}`}>
                        <h1 className='access'> Access the Extenstion</h1>
                        <p className='pa'>boost the productivity</p>
                        <div className="button">
                        <a href="https://chrome.google.com/webstore/detail/productivity-tracker/ihfjboopehfdmedfagockddklomdmglh" className="buttonq">
            <span className="button__text">
                Chrome Extension
            </span>
            <img src={cone} alt="" className="button__cone"/>
            <img src={torus} alt="" className="button__torus"/>
            <img src={ico} alt="" className="button__icosahedron"/>
            <img src={sphere} alt="" className="button__sphere"/>
        </a>
        </div>
                    </div>
                       
          
                </div>
                <div className={`copy ${props.mode ? '' : 'y'}`}>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li>Copyright</li>
                  <li>Suppport</li>
                </div>    
        </div>
    </>
  )
}

export default Contact