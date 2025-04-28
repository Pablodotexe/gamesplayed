export default function Button({ handleClick }) {
    return (
        // Se retorna un elemento <button> con clases CSS "btn btn--text" para estilizado.
        // Al hacer clic en el botón, se ejecuta la función handleClick proporcionada como prop.
        <button
            className="button"
            onClick={handleClick}
        >
          Sort by
        </button>
    )
}