import { useState } from 'react';

import CardCarouselSection from '../CardCarouselSection/CardCarouselSection';
import CardGridSection from '../CardGridSection/CardGridSection';
import './CardSection.css';

const CardSection = ({ name, songsData }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="section-container">
      <div className="text-container">
        <p>{name}</p>
        <p
          className="collapse-btn"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? 'Show all' : 'Collapse'}
        </p>
      </div>
      <div className="card-container">
        {isCollapsed ? (
          <CardCarouselSection name={name} songsData={songsData} />
        ) : (
          <>
            <CardGridSection songsData={songsData} />
          </>
        )}
      </div>
    </div>
  );
};

export default CardSection;
