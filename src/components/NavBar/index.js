// Write your code here.
import './index.css'

const Navbar = props => {
  const {topScore, currentScore, isGameplay} = props
  const king = isGameplay ? (
    <div>
      <p>Score:{currentScore}</p>
      <p>Top Score:{topScore}</p>
    </div>
  ) : (
    ''
  )
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
        {king}
      </div>
    </nav>
  )
}

export default Navbar
