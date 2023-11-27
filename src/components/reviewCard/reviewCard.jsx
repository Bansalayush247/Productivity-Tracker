import React, { useState } from 'react';
import './reviewCard.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import { images } from '../assets/data/reviewData';
import { useEffect } from 'react';
const ReviewCard = (props) => {
 
  const [startIndex, setStartIndex] = useState(0);

  const handleClickPrev = () => {
    if (startIndex > 0) {
      setStartIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (startIndex < images.length - (window.innerWidth < 420 ? 1 : window.innerWidth < 720 ? 2 : 3)) {
      setStartIndex(prevIndex => prevIndex + 1);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + (window.innerWidth < 420 ? 1 : window.innerWidth < 720 ? 2 : 3));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const rve = document.querySelector(".review h2");
      const rvec = document.querySelector(".review");
      const rvepos = rvec.offsetTop - rvec.offsetHeight + 150;

      if (rve && scrollPos > rvepos) {
        rve.style.opacity = "1";
        rve.style.top = 0 + 'px';
      } else {
        rve.style.top = 70 + 'px';
        rve.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`review ${props.mode ? '' : 'lightsssss'}`} id='4'>
      <h2>What our User See In this Extension</h2>

      <div className="reviewCard">
        <div className="prvBtn" onClick={handleClickPrev}>
          <BsFillArrowLeftCircleFill />
        </div>
        <div className="nxtBtn" onClick={handleClickNext}>
          <BsFillArrowRightCircleFill />
        </div>

        {visibleImages.map((image, index) => (
          <div key={index} className="reviewCard_userDetail">
            <div className="reviewCard_userImg">
              <img src={image.user} alt="Img of user" />
            </div>
            <div className="reviewCard_userName">
              <p>{image.name}</p>
            </div>
            <div className="reviewCard_desc">
              <p>{image.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
