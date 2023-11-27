import React, { useEffect } from 'react';

const Card = ({ imageSrc, titleMain, titleSub, content }) => (
  <div className="card">
    <div
      className="card__image"
      style={{ backgroundImage: `url(${imageSrc})` }}
    />
    <div className="card__textContent">
      <div className="card__title">
        <div className="card__title-main">{titleMain}</div>
        <div className="card__title-sub">{titleSub}</div>
      </div>
      <div className="card__content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="card__button button">Learn More</div>
    </div>
  </div>
);