// Write your code here.
import './index.css'

const Navbar = props => {
  const {topScore, currentScore, isGamePlay} = props

  return (
    <nav>
      <div>
        <div>
          <img
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          />
          <h1>Emoji Game</h1>
        </div>
        {isGamePlay && (
          <div>
            <p>Score: {currentScore}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
