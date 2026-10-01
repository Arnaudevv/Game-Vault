import Card from './card'
import './list.css'

function GameList({ title, games }) {
    return (
        <div className="game-list">
        <h2 className="game-list-title">{title}</h2>
        <div className="game-list-container">
            {games.map(game => (
            <Card 
                key={game.id}
                        title={game.title}
                        year={game.year}
                        genre={game.genre}
                        rating={game.rating}
                        image={game.image}
                      />
            ))}
        </div>
        </div>
    )
}

export default GameList