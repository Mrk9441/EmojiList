// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {fullDetails, clickId} = props
  const {emojiUrl, emojiName, id} = fullDetails
  const onClickEmoji = () => {
    clickId(id)
  }

  return (
    <li>
      <button type="button">
        <img src={emojiUrl} alt={emojiName} onClick={onClickEmoji} />
      </button>
    </li>
  )
}

export default EmojiCard
