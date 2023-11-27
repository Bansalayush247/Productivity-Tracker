import React from 'react';
import './FAQsCard.css';

const FAQsCard = ({ question, answer, index, activeIndex, handleCardToggle }) => {
  const isOpen = index === activeIndex;

  const handleToggle = () => {
    handleCardToggle(index);
  };

  return (
    <div className="FAQsCard">
      <div className="FAQsCard_heading" onClick={handleToggle}>
        <h3 className="FAQsCard_question">{question}</h3>
        <span className={`FAQsCard_icon ${isOpen ? 'open' : ''}`}>&#x25BC;</span>
      </div>
      {isOpen && (
        <div className="FAQsCard_content">
          <p className="FAQsCard_answer">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQsCard;
