import './App.css'
import {Games} from './data'
import Header from './components/header'
import GameList from './components/list'
import Footer  from './components/footer'

function App() {
  const games2026 = Games.filter(game => game.year === 2026)
  const gamesRPG = Games.filter(game => game.genre === 'RPG')
  const topRatings = Games.filter(game => game.rating > 9)
  // const gamesWithTwoA = Games.filter(game => game.genre === 'RPG')
  const gamesWithTwoA = Games.filter(
  game => (game.title.match(/a/gi) || []).length === 2
)
  return (
    <div className="app-layout">
      <Header />
      <div className='game-lists'>
        <GameList title="2026 Games" games={games2026} />
        <GameList title="RPG Games" games={gamesRPG} />
        <GameList title="Top Ratings" games={topRatings} />
        <GameList title="Games with 2 A" games={gamesWithTwoA} />
      </div>
      <Footer />
    </div>
  )
}

export default App
