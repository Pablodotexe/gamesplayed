import { useState } from 'react';
import AddGameButton from './AddGameButton';
import SelectYear from './SelectYear';
import '../index.css';
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";


export default function VideogameCard({ data }) {
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedYears, setSelectedYears] = useState({});

  const handleCardClick = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddGame = async (gameId, gameName) => {
    const selectedYear = selectedYears[gameId];
    if (!selectedYear) {
      alert('Por favor selecciona un año antes de guardar el juego.');
      return;
    }
  
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (!user) {
      alert("Debes estar logueado para guardar juegos.");
      return;
    }
  
    try {
      await addDoc(collection(db, "games"), {
        name: gameName,
        year: selectedYear,
        userId: user.uid, // 🔑 Guardamos el ID del usuario
        createdAt: new Date(),
      });
      alert(`Juego "${gameName}" guardado con éxito.`);
    } catch (error) {
      console.error("Error al guardar en Firebase:", error);
      alert("Hubo un error al guardar el juego.");
    }
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
                    <h3>{game.name}</h3>
                    <img src={game.background_image} alt={game.name} />
                    
                    <AddGameButton
                      onClick={() => handleAddGame(game.id, game.name)}
                    />
                    
                    <SelectYear
                      onChange={(year) =>
                        setSelectedYears((prev) => ({
                          ...prev,
                          [game.id]: year,
                        }))
                      }
                    />
                 
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
