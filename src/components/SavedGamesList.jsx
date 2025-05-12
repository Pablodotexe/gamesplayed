import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Ajusta la ruta según tu estructura de carpetas

export default function SavedGamesList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "games"));
        const gamesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setGames(gamesList);
      } catch (error) {
        console.error("Error al obtener juegos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Cargando juegos guardados...</p>;

  return (
    <div className="saved-games-list">
      <h2>Juegos Guardados</h2>
      {games.length === 0 ? (
        <p>No hay juegos guardados aún.</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              🎮 <strong>{game.name}</strong> — Año: {game.year}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}