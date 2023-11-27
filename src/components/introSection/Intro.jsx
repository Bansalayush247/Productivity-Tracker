import React from 'react'
import "./Intro.css"
import cone from "../assets/logo/cone.png"
import ico from "../assets/logo/iso.png"
import sphere from "../assets/logo/sphere.png"
import torus from "../assets/logo/torus.png"

function Intro(props) {
 return (
    <>
    
<div className={`pt ${props.mode ? '' : 'lights'}`} id='1'>

    <div className="pt_intro    ">
        <h1>Productivity Tracker</h1>
        <p>Boost productivity, track webtime, and gain valuable insights into time usage with our privacy-focused Chrome Extension. Constantly evolving to meet user needs, it offers website tracking, task management, and a user-friendly interface for efficient time allocation.</p>
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
    </>
  )
}

export default Intro;