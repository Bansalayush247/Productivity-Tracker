import React, { useState } from 'react';
import './FAQsSection.css';
import FAQImg from "../assets/logo/faq.png";
import FAQsCard from '../FAQsCard/FAQsCard';

const FAQsSection = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardToggle = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div  className={`FAQsSection ${props.mode ? '' : 'k'}`} id='5'>
      <div className="FAQsSection_heading">
        <img src={FAQImg} alt="FAQs Logo" />
      </div>
      <div className="FAQsSection_topics">
        <FAQsCard
          question="Lorem ipsum dolor sit amet?"
          answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias?"
          index={0}
          activeIndex={activeIndex}
          handleCardToggle={handleCardToggle}
        />
        <FAQsCard
          question="Consectetur adipisicing elit?"
          answer="Consectetur adipisicing elit. Voluptatem, doloremque?"
          index={1}
          activeIndex={activeIndex}
          handleCardToggle={handleCardToggle}
        />
            <FAQsCard
          question="Consectetur adipisicing elit?"
          answer="Consectetur adipisicing elit. Voluptatem, doloremque?"
          index={2}
          activeIndex={activeIndex}
          handleCardToggle={handleCardToggle}
        />
        {/* Add more FAQsCard components with their respective index */}
      </div>
    </div>
  );
};

export default FAQsSection;
