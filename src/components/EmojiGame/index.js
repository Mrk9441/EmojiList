/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import Winloss from '../WinOrLoseCard'
import Navbar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, isGamePlay: true, list: []}

  reset = () => {
    this.setState({list: [], isGamePlay: true})
  }

  renderloss = () => {
    const {emojisList} = this.props
    const {list} = this.state
    const isWin = list.length === emojisList.length

    return (
      <Winloss isWin={isWin} score={list.length} onClickback={this.reset} />
    )
  }

  findScore = current => {
    const {topScore} = this.state
    let newScore = topScore

    if (current > topScore) {
      newScore = current
    }
    this.setState({topScore: newScore, isGamePlay: false})
  }

  clickId = id => {
    const {emojisList} = this.props
    const {list} = this.state
    const match = list.includes(id)
    const score = list.length

    if (match) {
      this.findScore(score)
    } else {
      if (score - 1 === emojisList.length) {
        this.findScore(emojisList.length)
      }
      this.setState(prevState => ({list: [...prevState.list, id]}))
    }
  }

  getshuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderHome = () => {
    const shuffledEmojisList = this.getshuffledEmojisList()
    return (
      <ul>
        {shuffledEmojisList.map(each => (
          <EmojiCard key={each.id} fullDetails={each} clickId={this.clickId} />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGamePlay, list} = this.state

    return (
      <div className="app">
        <Navbar
          isGamePlay={isGamePlay}
          topScore={topScore}
          currentScore={list.length}
        />

        <div className="emoji">
          {isGamePlay ? this.renderHome() : this.renderloss()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
