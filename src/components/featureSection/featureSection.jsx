import React from 'react';
import './featureSection.css';
import ss from '../assets/logo/ptr.jpg';
import ptr from "../assets/logo/ptr2.png"
import ptrr from "../assets/logo/ptr33.jpg"
import { useEffect } from 'react';
const FeatureSection = (props) => {
  useEffect(() => {
  window.addEventListener("scroll",()=>{
    const scrollpos = window.scrollY;
    const img = document.querySelectorAll(".featureSection_features_screenshot img");
    const des = document.querySelectorAll(".screenshot_description");
    img.forEach((imgElement) => {
      const imgpos = imgElement.offsetTop - imgElement.offsetHeight - 50;
      console.log(imgpos);
      if(scrollpos>imgpos){
        imgElement.style.top=0;
        imgElement.style.opacity=1;
      }
      else{
        imgElement.style.top=5+'rem';
        imgElement.style.opacity=0;
      }
      
    });
    des.forEach((imgElement) => {
      const despos = imgElement.offsetTop - imgElement.offsetHeight -150;
      
      if(scrollpos>despos){
        imgElement.style.top=2+'rem';
        imgElement.style.opacity=1;
      }
      else{
        imgElement.style.top=-5+'rem';
        imgElement.style.opacity=0;
      }
      
    });
  })
}, []);
  return (
    <div className={`featureSection ${props.mode ? '' : 'li'}`} id='3'>
      <h2>BOOST IT!!</h2>
      <div className="featureSection_features">


        <div className="featureSection_features_videos">
        <iframe title="video"width="420" height="345" src="https://www.youtube.com/embed/a5KAkcNX34M?controls=0">
</iframe>
        </div>
        </div>

        <div className="featureSection_features_screenshots">
         
          <div className={`featureSection_features_screenshot ${props.mode ? '' : 'lig'}`}>
            <img   src={ss} alt="Screenshot 1" />
            <div className="screenshot_description">
              <p>Image 1 Description Lorem ipsum dolor sit
                 amet consectetur adipisicing elit. Rem ne
                 que numquam, dolorum totam magni adipisci 
                 autem nemo ad inventore quis, laboriosam 
                 nesciunt, temporibus quaerat qui explicabo 
                 voluptatum veritatis praesentium. Harum te
                 mpora vero eum expedita consequatur offici
                 is sint, illum aut dicta.</p>
            </div>
          </div>
          <div className={`featureSection_features_screenshot j ${props.mode ? '' : 'lig'}`}>
          <img src={ptrr} alt="Screenshot 2"  />
            <div className="screenshot_description">
              <p>Image 2 Description Lorem ipsum dolor sit
                 amet consectetur adipisicing elit. Rem ne
                 que numquam, dolorum totam magni adipisci 
                 autem nemo ad inventore quis, laboriosam 
                 nesciunt, temporibus quaerat qui explicabo 
                 voluptatum veritatis praesentium. Harum te
                 mpora vero eum expedita consequatur offici
                 is sint, illum aut dicta</p>
            </div>
          
          </div>
          <div className={`featureSection_features_screenshot ${props.mode ? '' : 'lig'}`}>
            <img src={ptr} alt="Screenshot 3" />
            <div className="screenshot_description">
              <p>Image 3 Description Lorem ipsum dolor sit
                 amet consectetur adipisicing elit. Rem ne
                 que numquam, dolorum totam magni adipisci 
                 autem nemo ad inventore quis, laboriosam 
                 nesciunt, temporibus quaerat qui explicabo 
                 voluptatum veritatis praesentium. Harum te
                 mpora vero eum expedita consequatur offici
                 is sint, illum aut dicta</p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default FeatureSection;
