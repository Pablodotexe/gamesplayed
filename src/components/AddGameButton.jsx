// AddGameButton.jsx
export default function AddGameButton({ onClick }) {
    return (
      <button 
        className="add-game-button" 
        onClick={(e) => {
          e.stopPropagation(); // Evita que el evento llegue a la tarjeta
          if (onClick) onClick(); // Si necesitas ejecutar otra acción
        }}
      >
        ADD GAME
      </button>
    );
  }