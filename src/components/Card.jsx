import React from 'react';

function Card({ title, description, items, buttonText, onButtonClick, className = '' }) {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-description">{description}</p>}
      {items && (
        <ul className="card-list">
          {items.map((item, index) => (
            <li key={index} className="card-item">
              {typeof item === 'string' ? item : item.name || item.title}
            </li>
          ))}
        </ul>
      )}
      {buttonText && onButtonClick && (
        <button className="card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Card;