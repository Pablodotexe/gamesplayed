export default function VideogameCard({data}) {
    
  return (
    <>
    {data ? (
      <div className="card-container">
        <ul className="card-list">
          {data.results.map((game) => (
            <li key={game.id} className="card">
              <h2>{game.name}</h2>
              <p>Rating: {game.rating}</p>
              <p>Released: {game.released}</p>
              <img src={game.background_image} alt={game.name} />
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    </>
  )
}