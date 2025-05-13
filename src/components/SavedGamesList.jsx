import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase';

export default function SavedGamesList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Escucha el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      if (!user) {
        setGames([]); // Limpia juegos al cerrar sesión
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const q = query(collection(db, "games"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
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
  }, [user]);

  if (loading) return <p>Cargando juegos guardados...</p>;

  if (!user) return <p>Inicia sesión para ver tus juegos guardados.</p>;

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
