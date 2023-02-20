import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {inputSearch: '', typeItem: ''}

  onSuggestionItem = suggestion => {
    const {inputSearch} = this.state
    this.setState({inputSearch: suggestion})
  }

  onTyping = event => {
    const {typeItem} = this.state
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputSearch} = this.state

    const filteredList = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-img"
          />

          <div className="search-list-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search"
                alt="search icon"
              />

              <input
                type="search"
                className="input"
                placeholder="Search Google"
                onChange={this.onTyping}
                value={inputSearch}
              />
            </div>
            <ul>
              {filteredList.map(suggestion => (
                <SuggestionItem
                  suggestionItem={suggestion}
                  key={suggestion.id}
                  id={suggestion.id}
                  onselectItem={this.onSuggestionItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
