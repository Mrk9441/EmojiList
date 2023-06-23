// Write your code here.
import './index.css'

const Winloss = props => {
  const {isWin, score, onClickback} = props
  const win = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = isWin ? 'Won' : 'Loss'
  const best = isWin ? 'Best Score' : 'Score'
  const img = isWin ? 'win' : 'loss'

  return (
    <div>
      <div>
        <h1>You {status}</h1>
        <p>{best}</p>
        <p>
          <span>{score}</span>/12
        </p>
        <button type="button" onClick={onClickback}>
          play Again
        </button>
      </div>
      <div>
        <img alt={img} src={win} />
      </div>
    </div>
  )
}

export default Winloss
