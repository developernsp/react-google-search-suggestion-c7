import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onselectItem} = props
  const {suggestion, id} = suggestionItem
  const onSelect = () => {
    onselectItem(suggestion)
  }

  return (
    <li className="list-item-container">
      <div className="item-container">
        <p>{suggestion}</p>
        <button type="button" className="btn" onClick={onSelect}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="img"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
