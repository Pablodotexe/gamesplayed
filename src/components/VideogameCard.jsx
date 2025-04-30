import { useState } from 'react';
import '../index.css';

export default function VideogameCard({ data }) {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {data ? (
        <div className="card-container">
          <ul className="card-list">
            {data.results.map((game) => (
              <li
                key={game.id}
                className="flip-card"
                onClick={() => handleCardClick(game.id)}
              >
                <div className={`flip-card-inner ${flippedCards[game.id] ? 'flipped' : ''}`}>
                  <div className="flip-card-front">
                    <h2>{game.name}</h2>
                    <img src={game.background_image} alt={game.name} />
                  </div>
                  <div className="flip-card-back">
                    <p>Rating: {game.rating}</p>
                    <p>Released: {game.released}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
