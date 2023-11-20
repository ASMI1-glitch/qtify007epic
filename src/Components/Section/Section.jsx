import { useState } from 'react';

import Card from '../Card/Card';
import './Section.css';

const Section = ({ name, songsData }) => {
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
          <div></div>
        ) : (
          <>
            {songsData.map((song) => (
              <Card
                key={song.id}
                image={song.image}
                text={
                  song.follows !== undefined
                    ? `${song.follows} Follows`
                    : `${song.likes} Likes`
                }
                title={song.title}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Section;
