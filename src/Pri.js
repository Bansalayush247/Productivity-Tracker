import React from 'react'
import Navbar from './components/navbarSection/Navbar'
import Privacy from './components/privacySection/Privacy'
import { useState } from 'react';
function Pri() {
  const [mode,setMode]=useState(true);
  const [enable,setEnable]=useState('Dark mode');
  const [bg,setBg]=useState("");
  const [links,setLinks]=useState("#ffffff");
  const [MyStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white',
    border:'1 px'
  })
  const handleonclick=()=>{
    
    if(mode===false){
      setMode(true);
      setEnable('light mode')
      
     
    }
    else{
      setEnable('Dark mode') 
      setMode(false);
     
     
    }
    console.log(mode);
    if(MyStyle.color==='white'){
      
      setMyStyle ({
        color:'black',
        backgroundColor:'white',
        border:'1px solid white'
      })
      
    }
    else{
      
      setMyStyle ({
        color:'white',
        backgroundColor:'black'
      })
      if(bg==="#ffffff"){
        setBg("#000000");
      }
      else{
        setBg("#ffffff");
      }
      if(links==="#ffffff"){
        setLinks("#000000");
      }
      else{
        setLinks("#ffffff");
      }
    }
      
    }
        
  return (
   <>
    <Navbar mode={mode} lightmode={handleonclick} enable={enable}></Navbar>
    <Privacy mode={mode}></Privacy>
   </>
  )
}

export default Pri